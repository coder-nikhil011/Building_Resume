const { pool } = require("../config/db");

// Plan limits
const PLAN_LIMITS = {
  free:    { maxResumes: 1,  maxDownloads: 2 },
  premium: { maxResumes: 3,  maxDownloads: Infinity },
  elite:   { maxResumes: 10, maxDownloads: Infinity },
};

// Templates allowed per plan
const FREE_TEMPLATES    = ["classic","minimal","simple","clean","clear","atsbasic","compact"];
const PREMIUM_TEMPLATES = ["modern","professional","corporate","bold","timeline","sidebar","gradient","stylish","managerial","startup","tech","fresher","light","dark","specialist","twocolumn","atspro","atsmodern"];
const ELITE_TEMPLATES   = ["creative","executive","elegant","designer","portfolio","academic","primeats"];

const canUseTemplate = (plan, templateId) => {
  if (FREE_TEMPLATES.includes(templateId)) return true;
  if (PREMIUM_TEMPLATES.includes(templateId)) return plan === "premium" || plan === "elite";
  if (ELITE_TEMPLATES.includes(templateId)) return plan === "elite";
  return false;
};

// ── Get all resumes for user ────────────────────────────
const getResumes = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, template, created_at, updated_at FROM resumes WHERE user_id = ? ORDER BY updated_at DESC",
      [req.user.id]
    );
    res.json({ resumes: rows });
  } catch (err) {
    console.error("getResumes error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Get single resume ───────────────────────────────────
const getResumeById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM resumes WHERE id = ? AND user_id = ?",
      [req.params.id, req.user.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json({ resume: rows[0] });
  } catch (err) {
    console.error("getResumeById error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Create resume ───────────────────────────────────────
const createResume = async (req, res) => {
  try {
    const { name, template, data } = req.body;
    const userId = req.user.id;
    const userPlan = req.user.plan;

    // Check resume limit
    const [countRows] = await pool.query(
      "SELECT COUNT(*) as count FROM resumes WHERE user_id = ?",
      [userId]
    );
    const count = countRows[0].count;
    const limit = PLAN_LIMITS[userPlan]?.maxResumes || 1;

    if (count >= limit) {
      return res.status(403).json({
        message: `Your ${userPlan} plan allows max ${limit} resume(s). Please upgrade to create more.`,
        upgrade: true,
      });
    }

    // Check template access
    if (template && !canUseTemplate(userPlan, template)) {
      return res.status(403).json({
        message: `This template requires a higher plan. Please upgrade.`,
        upgrade: true,
      });
    }

    if (!data) {
      return res.status(400).json({ message: "Resume data is required" });
    }

    const [result] = await pool.query(
      "INSERT INTO resumes (user_id, name, template, data) VALUES (?, ?, ?, ?)",
      [userId, name || "My Resume", template || "classic", JSON.stringify(data)]
    );

    const [rows] = await pool.query("SELECT * FROM resumes WHERE id = ?", [result.insertId]);

    res.status(201).json({ message: "Resume created", resume: rows[0] });
  } catch (err) {
    console.error("createResume error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Update resume ───────────────────────────────────────
const updateResume = async (req, res) => {
  try {
    const { name, template, data } = req.body;
    const userId = req.user.id;
    const userPlan = req.user.plan;

    // Check ownership
    const [existing] = await pool.query(
      "SELECT id FROM resumes WHERE id = ? AND user_id = ?",
      [req.params.id, userId]
    );
    if (existing.length === 0) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Check template access
    if (template && !canUseTemplate(userPlan, template)) {
      return res.status(403).json({
        message: "This template requires a higher plan.",
        upgrade: true,
      });
    }

    const fields = [];
    const values = [];

    if (name)     { fields.push("name = ?");     values.push(name); }
    if (template) { fields.push("template = ?"); values.push(template); }
    if (data)     { fields.push("data = ?");     values.push(JSON.stringify(data)); }

    if (fields.length === 0) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    values.push(req.params.id);
    await pool.query(`UPDATE resumes SET ${fields.join(", ")} WHERE id = ?`, values);

    const [rows] = await pool.query("SELECT * FROM resumes WHERE id = ?", [req.params.id]);
    res.json({ message: "Resume updated", resume: rows[0] });
  } catch (err) {
    console.error("updateResume error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Delete resume ───────────────────────────────────────
const deleteResume = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM resumes WHERE id = ? AND user_id = ?",
      [req.params.id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json({ message: "Resume deleted successfully" });
  } catch (err) {
    console.error("deleteResume error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ── Duplicate resume ────────────────────────────────────
const duplicateResume = async (req, res) => {
  try {
    const userId = req.user.id;
    const userPlan = req.user.plan;

    const [existing] = await pool.query(
      "SELECT * FROM resumes WHERE id = ? AND user_id = ?",
      [req.params.id, userId]
    );
    if (existing.length === 0) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Check limit
    const [countRows] = await pool.query("SELECT COUNT(*) as count FROM resumes WHERE user_id = ?", [userId]);
    const limit = PLAN_LIMITS[userPlan]?.maxResumes || 1;
    if (countRows[0].count >= limit) {
      return res.status(403).json({ message: "Resume limit reached. Please upgrade.", upgrade: true });
    }

    const original = existing[0];
    const [result] = await pool.query(
      "INSERT INTO resumes (user_id, name, template, data) VALUES (?, ?, ?, ?)",
      [userId, `${original.name} (Copy)`, original.template, original.data]
    );

    const [rows] = await pool.query("SELECT * FROM resumes WHERE id = ?", [result.insertId]);
    res.status(201).json({ message: "Resume duplicated", resume: rows[0] });
  } catch (err) {
    console.error("duplicateResume error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getResumes, getResumeById, createResume, updateResume, deleteResume, duplicateResume };