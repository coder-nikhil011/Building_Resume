const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { pool } = require("../config/db");

//const db = getDB();

// Generate JWT
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

// ── Register ────────────────────────────────────────────
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address" });
    }

    // Check if email exists
    const [existing] = await pool.query("SELECT id FROM users WHERE email = ?", [email.toLowerCase()]);
    if (existing.length > 0) {
      return res.status(409).json({ message: "Email already registered. Please sign in." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name.trim(), email.toLowerCase(), hashedPassword]
    );

    const userId = result.insertId;

    // Fetch created user
    const [rows] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [userId]
    );

    const user = rows[0];
    const token = generateToken(user.id);

    res.status(201).json({
      message: "Account created successfully",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        //plan: user.plan,
        //avatar: user.avatar,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// ── Login ───────────────────────────────────────────────
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user
    const [rows] = await pool.query(
      "SELECT id, name, email, password, plan, plan_expires_at, avatar FROM users WHERE email = ?",
      [email.toLowerCase()]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = rows[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check plan expiry
    /*let currentPlan = user.plan;
    if (currentPlan !== "free" && user.plan_expires_at) {
      if (new Date(user.plan_expires_at) < new Date()) {
        await pool.query("UPDATE users SET plan = 'free', plan_expires_at = NULL WHERE id = ?", [user.id]);
        currentPlan = "free";
      }
    }*/

    const token = generateToken(user.id);

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: currentPlan,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

// ── Get current user ────────────────────────────────────
const getMe = async (req, res) => {
  try {
    const user = req.user;
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: user.plan,
        plan_expires_at: user.plan_expires_at,
        avatar: user.avatar,
        created_at: user.created_at,
      },
    });
  } catch (err) {
    console.error("getMe error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Update profile ──────────────────────────────────────
const updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Name is required" });
    }

    await pool.query("UPDATE users SET name = ? WHERE id = ?", [name.trim(), userId]);

    const [rows] = await pool.query(
      "SELECT id, name, email, plan, avatar FROM users WHERE id = ?",
      [userId]
    );

    res.json({ message: "Profile updated", user: rows[0] });
  } catch (err) {
    console.error("updateProfile error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Change password ─────────────────────────────────────
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "Both passwords are required" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "New password must be at least 6 characters" });
    }

    const [rows] = await pool.query("SELECT password FROM users WHERE id = ?", [userId]);
    const isMatch = await bcrypt.compare(currentPassword, rows[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query("UPDATE users SET password = ? WHERE id = ?", [hashed, userId]);

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("changePassword error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login, getMe, updateProfile, changePassword };