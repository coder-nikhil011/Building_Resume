const express = require("express");
const router = express.Router();
const {
  getResumes, getResumeById, createResume,
  updateResume, deleteResume, duplicateResume
} = require("../controllers/resumeController");
const { protect } = require("../middleware/authMiddleware");

// All resume routes are protected
router.use(protect);

router.get("/",                    getResumes);
router.get("/:id",                 getResumeById);
router.post("/",                   createResume);
router.put("/:id",                 updateResume);
router.delete("/:id",              deleteResume);
router.post("/:id/duplicate",      duplicateResume);

module.exports = router;