import React from "react";
import { useResume } from "../../../context/ResumeContext";

// Original templates
import Classic from "../../templates/Classic";
import Modern from "../../templates/Modern";
import Minimal from "../../templates/Minimal";
import Professional from "../../templates/Professional";
import Creative from "../../templates/Creative";
import { Executive } from "../../templates/Executive";
import Elegant from "../../templates/Elegant";
import { Compact, Clean, Corporate, Stylish, Gradient, Bold } from "../../templates/MultiTemplates1";
import { Timeline, Sidebar, Portfolio, Designer, Clear, Managerial, Simple, Specialist, TwoColumn } from "../../templates/MultiTemplates2";

// New templates
import { Fresher, Dark, Light, Startup, Tech, Academic, PrimeATS, ATSBasic, ATSPro } from "../../templates/RemainingTemplates";

const TEMPLATES = [
  { id: "classic",      name: "Classic",      Component: Classic,      color: "#1a1a1a", tag: "Popular" },
  { id: "modern",       name: "Modern",       Component: Modern,       color: "#2563eb", tag: "Popular" },
  { id: "minimal",      name: "Minimal",      Component: Minimal,      color: "#6b7280" },
  { id: "professional", name: "Professional", Component: Professional, color: "#1e293b", tag: "Popular" },
  { id: "creative",     name: "Creative",     Component: Creative,     color: "#7c3aed" },
  { id: "executive",    name: "Executive",    Component: Executive,    color: "#111827" },
  { id: "elegant",      name: "Elegant",      Component: Elegant,      color: "#d4a853" },
  { id: "compact",      name: "Compact",      Component: Compact,      color: "#374151" },
  { id: "clean",        name: "Clean",        Component: Clean,        color: "#10b981" },
  { id: "corporate",    name: "Corporate",    Component: Corporate,    color: "#1e3a5f" },
  { id: "stylish",      name: "Stylish",      Component: Stylish,      color: "#be185d" },
  { id: "gradient",     name: "Gradient",     Component: Gradient,     color: "#6366f1", tag: "New" },
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
  { id: "fresher",      name: "Fresher",      Component: Fresher,      color: "#4f46e5", tag: "New" },
  { id: "dark",         name: "Dark",         Component: Dark,         color: "#818cf8" },
  { id: "light",        name: "Light",        Component: Light,        color: "#16a34a" },
  { id: "startup",      name: "Startup",      Component: Startup,      color: "#f59e0b" },
  { id: "tech",         name: "Tech",         Component: Tech,         color: "#22c55e" },
  { id: "academic",     name: "Academic",     Component: Academic,     color: "#374151" },
  { id: "primeats",     name: "Prime ATS",    Component: PrimeATS,     color: "#f97316", tag: "ATS" },
  { id: "atsbasic",     name: "ATS Basic",    Component: ATSBasic,     color: "#111827", tag: "ATS" },
  { id: "atspro",       name: "ATS Pro",      Component: ATSPro,       color: "#1d4ed8", tag: "ATS" },
];

const DEMO_RESUME = {
  personal: { firstName: "Alex", lastName: "Johnson", email: "alex@email.com", phone: "+1 555 0100", city: "New York", country: "USA", jobTitle: "Senior Designer" },
  summary: "Creative professional with 5+ years of experience building beautiful products and solving real problems.",
  experience: [
    { position: "Senior Designer", company: "Acme Corp", startDate: "2021", endDate: "Present", description: "Led product design across 3 major platforms serving 1M+ users." },
    { position: "UI Designer", company: "Studio X", startDate: "2019", endDate: "2021", description: "Designed user interfaces for mobile and web applications." },
  ],
  education: [{ degree: "B.Des Visual Communication", school: "Design Institute", startDate: "2015", endDate: "2019" }],
  skills: ["Figma", "React", "CSS", "Branding", "UX Research"],
  languages: [{ name: "English", level: "Native" }, { name: "Spanish", level: "B2" }],
  courses: [{ name: "Advanced UX Design", institution: "Coursera" }],
  links: [], hobbies: "Photography, hiking", activities: ["Design mentor", "Open source contributor"], internships: [], references: [],
};

export default function TemplateGallery() {
  const { activeTemplate, setActiveTemplate, resume } = useResume();
  const previewResume = resume?.personal?.firstName ? resume : DEMO_RESUME;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#f8f9fa" }}>
      {/* Header */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #e5e7eb", background: "#fff", flexShrink: 0 }}>
        <p style={{ fontSize: "12px", fontWeight: "600", color: "#374151", margin: 0 }}>Templates</p>
        <p style={{ fontSize: "10px", color: "#9ca3af", margin: "2px 0 0" }}>{TEMPLATES.length} designs available</p>
      </div>

      {/* Scrollable list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {TEMPLATES.map(({ id, name, Component, color, tag }) => {
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
                boxShadow: isActive ? `0 0 0 1px ${color}30, 0 4px 12px ${color}20` : "0 1px 4px rgba(0,0,0,0.08)",
                transition: "all 0.15s ease",
                background: "#fff",
              }}
            >
              {/* Live scaled preview */}
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

                {/* Active checkmark */}
                {isActive && (
                  <div style={{ position: "absolute", inset: 0, background: `${color}15`, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", padding: "8px" }}>
                    <div style={{ background: color, borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Tag badge */}
                {tag && !isActive && (
                  <div style={{
                    position: "absolute", top: "8px", left: "8px",
                    fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "10px",
                    background: tag === "ATS" ? "#fef3c7" : tag === "New" ? "#dcfce7" : "#ede9fe",
                    color: tag === "ATS" ? "#b45309" : tag === "New" ? "#15803d" : "#4f46e5",
                  }}>
                    {tag}
                  </div>
                )}
              </div>

              {/* Name bar */}
              <div style={{
                padding: "7px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: isActive ? `${color}12` : "#fff",
                borderTop: `1px solid ${isActive ? color + "30" : "#f3f4f6"}`,
              }}>
                <span style={{ fontSize: "11px", fontWeight: "600", color: isActive ? color : "#374151" }}>{name}</span>
                {isActive
                  ? <span style={{ fontSize: "9px", color: color, fontWeight: "700", textTransform: "uppercase" }}>Active</span>
                  : tag && <span style={{ fontSize: "9px", color: "#9ca3af" }}>{tag}</span>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}