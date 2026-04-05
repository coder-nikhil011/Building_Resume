const jwt = require("jsonwebtoken");
const { pool } = require("../config/db");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized — no token" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch fresh user from DB
    const [rows] = await pool.query(
      "SELECT id, name, email, plan, plan_expires_at, avatar, created_at FROM users WHERE id = ?",
      [decoded.id]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = rows[0];

    // Check if plan has expired
    if (user.plan !== "free" && user.plan_expires_at) {
      if (new Date(user.plan_expires_at) < new Date()) {
        // Downgrade to free
        await pool.query("UPDATE users SET plan = 'free', plan_expires_at = NULL WHERE id = ?", [user.id]);
        user.plan = "free";
        user.plan_expires_at = null;
      }
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired — please login again" });
    }
    console.error("Auth middleware error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional auth — attaches user if token exists, doesn't fail if not
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      req.user = null;
      return next();
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [rows] = await pool.query(
      "SELECT id, name, email, plan, plan_expires_at FROM users WHERE id = ?",
      [decoded.id]
    );
    req.user = rows[0] || null;
    next();
  } catch {
    req.user = null;
    next();
  }
};

module.exports = { protect, optionalAuth };