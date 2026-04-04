import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../context/ResumeContext";
import { useAuth } from "../../../context/AuthContext";
import { getTemplatePlan, PLAN_COLORS } from "../../../utils/templatePlans";

import Classic from "../../templates/Classic";
import Modern from "../../templates/Modern";
import Minimal from "../../templates/Minimal";
import Professional from "../../templates/Professional";
import Creative from "../../templates/Creative";
import Executive from "../../templates/Executive";
import Elegant from "../../templates/Elegant";
import Bold from "../../templates/Bold";
import Clean from "../../templates/Clean";
import Clear from "../../templates/Clear";
import Compact from "../../templates/Compact";
import Corporate from "../../templates/Corporate";
import Designer from "../../templates/Designer";
import Gradient from "../../templates/Gradient";
import Managerial from "../../templates/Managerial";
import Portfolio from "../../templates/Portfolio";
import Sidebar from "../../templates/Sidebar";
import Simple from "../../templates/Simple";
import Specialist from "../../templates/Specialist";
import Stylish from "../../templates/Stylish";
import Timeline from "../../templates/Timeline";
import TwoColumn from "../../templates/TwoColumn";
import Fresher from "../../templates/Fresher";
import Dark from "../../templates/Dark";
import Light from "../../templates/Light";
import Startup from "../../templates/Startup";
import Tech from "../../templates/Tech";
import Academic from "../../templates/Academic";
import PrimeATS from "../../templates/PrimeATS";
import ATSBasic from "../../templates/ATSBasic";
import ATSPro from "../../templates/ATSPro";
import ATSModern from "../../templates/ATSModern";

const TEMPLATES = [
  { id: "classic",      name: "Classic",      Component: Classic,      color: "#1a1a1a" },
  { id: "minimal",      name: "Minimal",      Component: Minimal,      color: "#6b7280" },
  { id: "simple",       name: "Simple",       Component: Simple,       color: "#111827" },
  { id: "clean",        name: "Clean",        Component: Clean,        color: "#10b981" },
  { id: "clear",        name: "Clear",        Component: Clear,        color: "#6b7280" },
  { id: "atsbasic",     name: "ATS Basic",    Component: ATSBasic,     color: "#111827" },
  { id: "compact",      name: "Compact",      Component: Compact,      color: "#374151" },
  { id: "modern",       name: "Modern",       Component: Modern,       color: "#2563eb" },
  { id: "professional", name: "Professional", Component: Professional, color: "#1e293b" },
  { id: "corporate",    name: "Corporate",    Component: Corporate,    color: "#1e3a5f" },
  { id: "bold",         name: "Bold",         Component: Bold,         color: "#000000" },
  { id: "timeline",     name: "Timeline",     Component: Timeline,     color: "#0ea5e9" },
  { id: "sidebar",      name: "Sidebar",      Component: Sidebar,      color: "#f97316" },
  { id: "gradient",     name: "Gradient",     Component: Gradient,     color: "#6366f1" },
  { id: "stylish",      name: "Stylish",      Component: Stylish,      color: "#be185d" },
  { id: "managerial",   name: "Managerial",   Component: Managerial,   color: "#374151" },
  { id: "startup",      name: "Startup",      Component: Startup,      color: "#f59e0b" },
  { id: "tech",         name: "Tech",         Component: Tech,         color: "#22c55e" },
  { id: "fresher",      name: "Fresher",      Component: Fresher,      color: "#4f46e5" },
  { id: "light",        name: "Light",        Component: Light,        color: "#16a34a" },
  { id: "dark",         name: "Dark",         Component: Dark,         color: "#818cf8" },
  { id: "specialist",   name: "Specialist",   Component: Specialist,   color: "#065f46" },
  { id: "twocolumn",    name: "Two Column",   Component: TwoColumn,    color: "#4338ca" },
  { id: "atspro",       name: "ATS Pro",      Component: ATSPro,       color: "#1d4ed8" },
  { id: "atsmodern",    name: "ATS Modern",   Component: ATSModern,    color: "#0f766e" },
  { id: "creative",     name: "Creative",     Component: Creative,     color: "#7c3aed" },
  { id: "executive",    name: "Executive",    Component: Executive,    color: "#111827" },
  { id: "elegant",      name: "Elegant",      Component: Elegant,      color: "#d4a853" },
  { id: "designer",     name: "Designer",     Component: Designer,     color: "#6366f1" },
  { id: "portfolio",    name: "Portfolio",    Component: Portfolio,    color: "#0f172a" },
  { id: "academic",     name: "Academic",     Component: Academic,     color: "#374151" },
  { id: "primeats",     name: "Prime ATS",    Component: PrimeATS,     color: "#ea580c" },
];

const DEMO_RESUME = {
  personal: { firstName: "Alex", lastName: "Johnson", email: "alex@email.com", phone: "+1 555 0100", city: "New York", country: "USA", jobTitle: "Senior Designer" },
  summary: "Creative professional with 5+ years of experience building beautiful products.",
  experience: [
    { position: "Senior Designer", company: "Acme Corp", startDate: "2021", endDate: "Present", description: "Led product design across 3 major platforms." },
    { position: "UI Designer", company: "Studio X", startDate: "2019", endDate: "2021", description: "Designed interfaces for mobile apps." },
  ],
  education: [{ degree: "B.Des Visual Communication", school: "Design Institute", startDate: "2015", endDate: "2019" }],
  skills: ["Figma", "React", "CSS", "Branding", "UX Research"],
  languages: [{ name: "English", level: "Native" }, { name: "Spanish", level: "B2" }],
  courses: [], links: [], hobbies: "Photography", activities: [], internships: [], references: [],
};

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" />
  </svg>
);

export default function TemplateGallery() {
  const { activeTemplate, setActiveTemplate, resume } = useResume();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const previewResume = resume?.personal?.firstName ? resume : DEMO_RESUME;

  // Get user plan from user object — default free
  // When backend is connected, replace with: user?.plan || "free"
  const userPlan = user?.plan || "free";

  const canAccess = (templateId) => {
    const plan = getTemplatePlan(templateId);
    if (plan === "free") {
      // Free templates: need login
      return isAuthenticated;
    }
    if (plan === "premium") {
      return isAuthenticated && (userPlan === "premium" || userPlan === "elite");
    }
    if (plan === "elite") {
      return isAuthenticated && userPlan === "elite";
    }
    return false;
  };

  const showToast = (msg, type = "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSelect = (id) => {
    const plan = getTemplatePlan(id);

    // Free template — need login
    if (plan === "free" && !isAuthenticated) {
      showToast("Please sign in to use this template", "login");
      setTimeout(() => navigate("/login"), 1200);
      return;
    }

    // Premium template
    if (plan === "premium") {
      if (!isAuthenticated) {
        showToast("Please sign in to access Premium templates", "login");
        setTimeout(() => navigate("/login"), 1200);
        return;
      }
      if (userPlan !== "premium" && userPlan !== "elite") {
        showToast("Upgrade to Premium to use this template", "upgrade");
        setTimeout(() => navigate("/pricing"), 1200);
        return;
      }
    }

    // Elite template
    if (plan === "elite") {
      if (!isAuthenticated) {
        showToast("Please sign in to access Elite templates", "login");
        setTimeout(() => navigate("/login"), 1200);
        return;
      }
      if (userPlan !== "elite") {
        showToast("Upgrade to Elite to use this template", "upgrade");
        setTimeout(() => navigate("/pricing"), 1200);
        return;
      }
    }

    setActiveTemplate(id);
  };

  const isLocked = (id) => !canAccess(id);

  const getLockMsg = (id) => {
    const plan = getTemplatePlan(id);
    if (!isAuthenticated) return plan === "free" ? "Login required" : `${plan === "premium" ? "PRO" : "ELITE"} + Login`;
    return plan === "elite" ? "Elite only" : "PRO only";
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#f8f9fa", position: "relative" }}>

      {/* Toast notification */}
      {toast && (
        <div style={{
          position: "absolute", top: "12px", left: "10px", right: "10px", zIndex: 100,
          background: toast.type === "upgrade" ? "#4f46e5" : "#111827",
          color: "#fff", borderRadius: "10px", padding: "10px 14px",
          fontSize: "12px", fontWeight: "600", textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          animation: "fadeIn 0.2s ease",
        }}>
          {toast.type === "upgrade" ? "⭐ " : "🔒 "}{toast.msg}
        </div>
      )}

      {/* Header */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid #e5e7eb", background: "#fff", flexShrink: 0 }}>
        <p style={{ fontSize: "12px", fontWeight: "600", color: "#374151", margin: 0 }}>Templates</p>
        <p style={{ fontSize: "10px", color: "#9ca3af", margin: "2px 0 0" }}>{TEMPLATES.length} designs available</p>
      </div>

      {/* Plan legend */}
      <div style={{ padding: "8px 10px", borderBottom: "1px solid #f3f4f6", background: "#fff", display: "flex", gap: "6px", flexShrink: 0, flexWrap: "wrap" }}>
        {[
          { label: "FREE", color: "#15803d", bg: "#f0fdf4" },
          { label: "PRO", color: "#1d4ed8", bg: "#eff6ff" },
          { label: "ELITE", color: "#9333ea", bg: "#fdf4ff" },
        ].map(({ label, color, bg }) => (
          <span key={label} style={{ fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "8px", background: bg, color }}>{label}</span>
        ))}
        {!isAuthenticated && (
          <span style={{ fontSize: "10px", color: "#9ca3af", marginLeft: "4px" }}>
            🔒 Login to use templates
          </span>
        )}
      </div>

      {/* Scrollable list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {TEMPLATES.map(({ id, name, Component, color }) => {
          const isActive = activeTemplate === id;
          const plan = getTemplatePlan(id);
          const planInfo = PLAN_COLORS[plan];
          const locked = isLocked(id);

          return (
            <div
              key={id}
              onClick={() => handleSelect(id)}
              style={{
                cursor: "pointer", borderRadius: "8px", overflow: "hidden",
                border: isActive ? `2px solid ${color}` : "2px solid transparent",
                boxShadow: isActive ? `0 0 0 1px ${color}30, 0 4px 12px ${color}20` : "0 1px 4px rgba(0,0,0,0.08)",
                transition: "all 0.15s ease", background: "#fff",
              }}
            >
              {/* Live preview */}
              <div style={{ position: "relative", overflow: "hidden", height: "220px", background: "#f3f4f6" }}>
                <div style={{ transform: "scale(0.265)", transformOrigin: "top left", width: "794px", pointerEvents: "none", userSelect: "none" }}>
                  <Component resume={previewResume} />
                </div>

                {/* Active checkmark */}
                {isActive && (
                  <div style={{ position: "absolute", inset: 0, background: `${color}15`, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", padding: "8px" }}>
                    <div style={{ background: color, borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                )}

                {/* Lock overlay */}
                {locked && (
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                      <LockIcon />
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#fff" }}>{getLockMsg(id)}</span>
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.65)" }}>
                      {!isAuthenticated ? "Tap to sign in" : "Tap to upgrade"}
                    </span>
                  </div>
                )}

                {/* Plan badge */}
                {!isActive && (
                  <div style={{ position: "absolute", top: "8px", left: "8px", fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "10px", background: planInfo.bg, color: planInfo.text }}>
                    {planInfo.label}
                  </div>
                )}
              </div>

              {/* Name bar */}
              <div style={{ padding: "7px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", background: isActive ? `${color}12` : "#fff", borderTop: `1px solid ${isActive ? color + "30" : "#f3f4f6"}` }}>
                <span style={{ fontSize: "11px", fontWeight: "600", color: isActive ? color : "#374151" }}>{name}</span>
                {locked ? (
                  <span style={{ fontSize: "9px", color: planInfo.text, fontWeight: "700", display: "flex", alignItems: "center", gap: "3px" }}>
                    <LockIcon /> {planInfo.label}
                  </span>
                ) : isActive ? (
                  <span style={{ fontSize: "9px", color: color, fontWeight: "700" }}>Active</span>
                ) : (
                  <span style={{ fontSize: "9px", color: planInfo.text, fontWeight: "600" }}>{planInfo.label}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}