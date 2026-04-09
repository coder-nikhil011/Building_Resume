import React from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../context/ResumeContext";

import Classic from "../components/templates/Classic";
import Modern from "../components/templates/Modern";
import Minimal from "../components/templates/Minimal";

const templates = [
  { id: "classic", Component: Classic },
  { id: "modern", Component: Modern },
  { id: "minimal", Component: Minimal },
];

export default function TemplateSelect() {
  const navigate = useNavigate();
  const { setActiveTemplate } = useResume();

  const handleSelect = (id) => {
    setActiveTemplate(id);
    navigate("/build-resume");
  };

  const handleSkip = () => {
    setActiveTemplate("classic"); // default
    navigate("/build-resume");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", padding: "20px" }}>
      
      {/* Top Bar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
          Please choose a template
        </h2>

        <button
          onClick={handleSkip}
          style={{
            background: "#3b82f6",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Skip
        </button>
      </div>

      {/* Templates */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {templates.map(({ id, Component }) => (
          <div
            key={id}
            style={{
              width: "300px",
              height: "420px",
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
          >
            {/* Preview */}
            <div
              style={{
                transform: "scale(0.38)",
                transformOrigin: "top left",
                width: "794px",
                height: "1123px",
              }}
            >
              <Component resume={{ personal: { firstName: "John" } }} />
            </div>

            {/* Hover Button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.3)",
                opacity: 0,
                transition: "0.2s",
              }}
              className="hoverBox"
              onClick={() => handleSelect(id)}
            >
              <button
                style={{
                  background: "#3b82f6",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                }}
              >
                Use this template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      <style>
        {`
        div:hover > .hoverBox {
          opacity: 1;
        }
        `}
      </style>
    </div>
  );
}