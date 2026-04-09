// src/pages/BuildResume.jsx
import React, { useState } from "react";
import ResumeBuilder from "../components/resume/builder/ResumeBuilder";
import TemplateGallery from "../components/resume/customize/TemplateGallery";

export default function BuildResume() {
  const [step, setStep] = useState("template"); // template | builder
  const [showModal, setShowModal] = useState(false);

  // 🔥 TEMPLATE SELECT
  const handleTemplateSelect = () => {
    setShowModal(true);
  };

  // 🔥 MODAL OPTION
  const handleOption = (type) => {
    setShowModal(false);

    if (type === "manual") {
      setStep("builder");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* STEP 1 → TEMPLATE */}
      {step === "template" && (
        <>
          {/* 🔥 SKIP BUTTON */}
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <button onClick={() => setShowModal(true)}>Skip</button>
          </div>

          <TemplateGallery onSelectTemplate={handleTemplateSelect} />
        </>
      )}

      {/* STEP 2 → BUILDER */}
      {step === "builder" && <ResumeBuilder />}

      {/* STEP 3 → MODAL */}
      {showModal && (
        <div style={overlay}>
          <div style={modal}>
            <button onClick={() => setShowModal(false)} style={closeBtn}>✕</button>

            <h2>Let’s get started</h2>
            <p style={{ color: "#6b7280" }}>
              How do you want to create your resume?
            </p>

            <Option text="Create new resume" onClick={() => handleOption("manual")} />
            <Option text="Create with AI assistance" onClick={() => handleOption("ai")} />
            <Option text="Upload resume" onClick={() => handleOption("upload")} />
            <Option text="Create with Linkedin profile" onClick={() => handleOption("linkedin")} />
            <Option text="Create from example" onClick={() => handleOption("example")} />
          </div>
        </div>
      )}
    </div>
  );
}

/* UI (no style change impact) */
function Option({ text, onClick }) {
  return (
    <div onClick={onClick} style={option}>
      {text} →
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modal = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  width: "400px",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "15px",
  border: "none",
  background: "transparent",
  fontSize: "18px",
  cursor: "pointer",
};

const option = {
  padding: "12px",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};