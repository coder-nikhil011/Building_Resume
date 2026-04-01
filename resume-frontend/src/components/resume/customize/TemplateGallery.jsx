import React from "react";
import { useResume } from "../../../context/ResumeContext";

import Classic from "../../templates/Classic";
import Modern from "../../templates/Modern";
import Minimal from "../../templates/Minimal";
import Professional from "../../templates/Professional";
import Creative from "../../templates/Creative";
import { Executive } from "../../templates/Executive";
import Elegant from "../../templates/Elegant";
import { Compact, Clean, Corporate, Stylish, Gradient, Bold } from "../../templates/MultiTemplates1";
import { Timeline, Sidebar, Portfolio, Designer, Clear, Managerial, Simple, Specialist, TwoColumn } from "../../templates/MultiTemplates2";

const TEMPLATES = [
  { id: "classic",      name: "Classic",      Component: Classic,      color: "#1a1a1a" },
  { id: "modern",       name: "Modern",       Component: Modern,       color: "#2563eb" },
  { id: "minimal",      name: "Minimal",      Component: Minimal,      color: "#6b7280" },
  { id: "professional", name: "Professional", Component: Professional, color: "#1e293b" },
  { id: "creative",     name: "Creative",     Component: Creative,     color: "#7c3aed" },
  { id: "executive",    name: "Executive",    Component: Executive,    color: "#111827" },
  { id: "elegant",      name: "Elegant",      Component: Elegant,      color: "#d4a853" },
  { id: "compact",      name: "Compact",      Component: Compact,      color: "#374151" },
  { id: "clean",        name: "Clean",        Component: Clean,        color: "#10b981" },
  { id: "corporate",    name: "Corporate",    Component: Corporate,    color: "#1e3a5f" },
  { id: "stylish",      name: "Stylish",      Component: Stylish,      color: "#be185d" },
  { id: "gradient",     name: "Gradient",     Component: Gradient,     color: "#6366f1" },
  { id: "bold",         name: "Bold",         Component: Bold,         color: "#000000" },
  { id: "timeline",     name: "Timeline",     Component: Timeline,     color: "#0ea5e9" },
  { id: "sidebar",      name: "Sidebar",      Component: Sidebar,      color: "#f97316" },
  { id: "portfolio",    name: "Portfolio",    Component: Portfolio,    color: "#0f172a" },
  { id: "designer",     name: "Designer",     Component: Designer,     color: "#6366f1" },
  { id: "clear",        name: "Clear",        Component: Clear,        color: "#6b7280" },
  { id: "managerial",   name: "Managerial",   Component: Managerial,   color: "#374151" },
  { id: "simple",       name: "Simple",       Component: Simple,       color: "#111827" },
  { id: "specialist",   name: "Specialist",   Component: Specialist,   color: "#065f46" },
  { id: "twocolumn",    name: "Two Column",   Component: TwoColumn,    color: "#4338ca" },
];

const DEMO_RESUME = {
  personal: { firstName: "Alex", lastName: "Johnson", email: "alex@email.com", phone: "+1 555 0100", city: "New York", country: "USA", jobTitle: "Senior Designer" },
  summary: "Creative professional with 5+ years of experience building beautiful products.",
  experience: [
    { position: "Senior Designer", company: "Acme Corp", startDate: "2021", endDate: "Present", description: "Led product design across 3 major platforms." },
    { position: "UI Designer", company: "Studio X", startDate: "2019", endDate: "2021", description: "Designed user interfaces for mobile apps." },
  ],
  education: [{ degree: "B.Des Visual Communication", school: "Design Institute", startDate: "2015", endDate: "2019" }],
  skills: ["Figma", "React", "CSS", "Branding", "UX Research"],
  languages: [{ name: "English", level: "Native" }, { name: "Spanish", level: "B2" }],
  links: [], courses: [], hobbies: "", activities: [], internships: [], references: [],
};

export default function TemplateGallery() {
  const { activeTemplate, setActiveTemplate, resume } = useResume();

  const previewResume = resume?.personal?.firstName ? resume : DEMO_RESUME;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#f8f9fa" }}>
      {/* Header */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #e5e7eb", background: "#fff", flexShrink: 0 }}>
        <p style={{ fontSize: "12px", fontWeight: "600", color: "#374151", margin: 0 }}>Templates</p>
        <p style={{ fontSize: "10px", color: "#9ca3af", margin: "2px 0 0" }}>{TEMPLATES.length} designs</p>
      </div>

      {/* Scrollable gallery */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {TEMPLATES.map(({ id, name, Component, color }) => {
          const isActive = activeTemplate === id;
          return (
            <div
              key={id}
              onClick={() => setActiveTemplate(id)}
              style={{
                cursor: "pointer",
                borderRadius: "8px",
                overflow: "hidden",
                border: isActive ? `2px solid ${color}` : "2px solid transparent",
                boxShadow: isActive ? `0 0 0 1px ${color}20, 0 4px 12px ${color}20` : "0 1px 4px rgba(0,0,0,0.08)",
                transition: "all 0.2s ease",
                background: "#fff",
              }}
            >
              {/* Live preview — scaled down */}
              <div style={{ position: "relative", overflow: "hidden", height: "220px", background: "#f3f4f6" }}>
                <div style={{
                  transform: "scale(0.265)",
                  transformOrigin: "top left",
                  width: "794px",
                  pointerEvents: "none",
                  userSelect: "none",
                }}>
                  <Component resume={previewResume} />
                </div>

                {/* Selected overlay */}
                {isActive && (
                  <div style={{ position: "absolute", inset: 0, background: `${color}18`, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", padding: "8px" }}>
                    <div style={{ background: color, borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Name bar */}
              <div style={{
                padding: "7px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: isActive ? `${color}10` : "#fff",
                borderTop: `1px solid ${isActive ? color + "30" : "#f3f4f6"}`,
              }}>
                <span style={{ fontSize: "11px", fontWeight: "600", color: isActive ? color : "#374151" }}>{name}</span>
                {isActive && <span style={{ fontSize: "9px", color: color, fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>Active</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}