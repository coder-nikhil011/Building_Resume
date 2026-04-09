import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../context/ResumeContext";
import { useAuth } from "../../../context/AuthContext";

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

// ── Demo resume for preview boxes ──────────────────────
const DEMO = {
  personal: {
    firstName: "John", lastName: "Carter",
    email: "john@email.com", phone: "+1 555 0100",
    city: "New York", country: "USA",
    jobTitle: "Product Designer",
  },
  summary: "Creative designer with 5+ years building beautiful digital products.",
  experience: [
    { position: "Senior Designer", company: "Acme Corp", startDate: "2021", endDate: "Present", description: "Led design across 3 major product lines." },
    { position: "UI Designer", company: "Studio X", startDate: "2019", endDate: "2021", description: "Designed interfaces for mobile apps." },
  ],
  education: [{ degree: "B.Des Visual Communication", school: "Design Institute", startDate: "2015", endDate: "2019" }],
  skills: ["Figma", "React", "CSS", "Branding", "UX"],
  languages: [{ name: "English", level: "Native" }, { name: "Spanish", level: "B2" }],
  courses: [], links: [], hobbies: "", activities: [], internships: [], references: [],
};

// ── Template plan config ────────────────────────────────
const FREE = ["classic", "minimal", "simple", "clean", "clear", "atsbasic", "compact"];
const PREMIUM = [
  "modern", "professional", "corporate", "bold", "timeline", "sidebar",
  "gradient", "stylish", "managerial", "startup", "tech", "fresher",
  "light", "dark", "specialist", "twocolumn", "atspro", "atsmodern",
];
const ELITE = ["creative", "executive", "elegant", "designer", "portfolio", "academic", "primeats"];

const PLAN_META = {
  free:    { label: "FREE",  bg: "#f0fdf4", color: "#15803d", border: "#86efac" },
  premium: { label: "PRO",   bg: "#eff6ff", color: "#1d4ed8", border: "#93c5fd" },
  elite:   { label: "ELITE", bg: "#fdf4ff", color: "#9333ea", border: "#d8b4fe" },
};

const getPlan = (id) => {
  if (FREE.includes(id)) return "free";
  if (PREMIUM.includes(id)) return "premium";
  return "elite";
};

// ── All templates ───────────────────────────────────────
const ALL_TEMPLATES = [
  // FREE
  { id: "classic",      name: "Classic",      Component: Classic },
  { id: "minimal",      name: "Minimal",      Component: Minimal },
  { id: "simple",       name: "Simple",       Component: Simple },
  { id: "clean",        name: "Clean",        Component: Clean },
  { id: "clear",        name: "Clear",        Component: Clear },
  { id: "atsbasic",     name: "ATS Basic",    Component: ATSBasic },
  { id: "compact",      name: "Compact",      Component: Compact },
  // PREMIUM
  { id: "modern",       name: "Modern",       Component: Modern },
  { id: "professional", name: "Professional", Component: Professional },
  { id: "corporate",    name: "Corporate",    Component: Corporate },
  { id: "bold",         name: "Bold",         Component: Bold },
  { id: "timeline",     name: "Timeline",     Component: Timeline },
  { id: "sidebar",      name: "Sidebar",      Component: Sidebar },
  { id: "gradient",     name: "Gradient",     Component: Gradient },
  { id: "stylish",      name: "Stylish",      Component: Stylish },
  { id: "managerial",   name: "Managerial",   Component: Managerial },
  { id: "startup",      name: "Startup",      Component: Startup },
  { id: "tech",         name: "Tech",         Component: Tech },
  { id: "fresher",      name: "Fresher",      Component: Fresher },
  { id: "light",        name: "Light",        Component: Light },
  { id: "dark",         name: "Dark",         Component: Dark },
  { id: "specialist",   name: "Specialist",   Component: Specialist },
  { id: "twocolumn",    name: "Two Column",   Component: TwoColumn },
  { id: "atspro",       name: "ATS Pro",      Component: ATSPro },
  { id: "atsmodern",    name: "ATS Modern",   Component: ATSModern },
  // ELITE
  { id: "creative",     name: "Creative",     Component: Creative },
  { id: "executive",    name: "Executive",    Component: Executive },
  { id: "elegant",      name: "Elegant",      Component: Elegant },
  { id: "designer",     name: "Designer",     Component: Designer },
  { id: "portfolio",    name: "Portfolio",    Component: Portfolio },
  { id: "academic",     name: "Academic",     Component: Academic },
  { id: "primeats",     name: "Prime ATS",    Component: PrimeATS },
];

// Scale factor: box width 150px / template width 794px
const SCALE = 150 / 794;
const BOX_H = Math.round(1123 * SCALE); // ~212px

function TemplateBox({ id, name, Component, isActive, locked, plan, onSelect }) {
  const meta = PLAN_META[plan];

  return (
    <div
      onClick={onSelect}
      style={{
        cursor: "pointer",
        borderRadius: "8px",
        overflow: "hidden",
        border: isActive ? "2px solid #6366f1" : "2px solid #e5e7eb",
        boxShadow: isActive ? "0 0 0 3px #e0e7ff" : "none",
        background: "#fff",
        transition: "all 0.15s",
        flexShrink: 0,
      }}
    >
      {/* Frozen preview box */}
      <div style={{ position: "relative", width: "150px", height: `${BOX_H}px`, overflow: "hidden", background: "#f9fafb" }}>
        {/* Static frozen render */}
        <div style={{
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          width: "794px",
          height: "1123px",
          pointerEvents: "none",
          userSelect: "none",
        }}>
          <Component resume={DEMO} />
        </div>

        {/* Active checkmark */}
        {isActive && (
          <div style={{ position: "absolute", top: "6px", right: "6px", width: "20px", height: "20px", borderRadius: "50%", background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}

        {/* Lock overlay */}
        {locked && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.48)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "6px",
          }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontSize: "10px", fontWeight: "700", color: "#fff" }}>
              {plan === "elite" ? "Elite" : "Pro"}
            </span>
          </div>
        )}

        {/* Plan badge top-left */}
        {!isActive && (
          <div style={{
            position: "absolute", top: "6px", left: "6px",
            fontSize: "8px", fontWeight: "700",
            padding: "2px 6px", borderRadius: "8px",
            background: meta.bg, color: meta.color,
            border: `1px solid ${meta.border}`,
          }}>
            {meta.label}
          </div>
        )}
      </div>

      {/* Name label */}
      <div style={{
        padding: "6px 8px",
        background: isActive ? "#eef2ff" : "#fff",
        borderTop: `1px solid ${isActive ? "#c7d2fe" : "#f3f4f6"}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "10px", fontWeight: "600", color: isActive ? "#4f46e5" : "#374151" }}>
          {name}
        </span>
        {isActive && <span style={{ fontSize: "8px", color: "#6366f1", fontWeight: "700" }}>✓ Active</span>}
      </div>
    </div>
  );
}

// ── Section header ──────────────────────────────────────
function SectionHeader({ plan, count }) {
  const meta = PLAN_META[plan];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 12px 6px", flexShrink: 0 }}>
      <span style={{ fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "8px", background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}>
        {meta.label}
      </span>
      <span style={{ fontSize: "10px", color: "#9ca3af" }}>{count} templates</span>
      {plan !== "free" && (
        <span style={{ fontSize: "9px", color: meta.color, marginLeft: "auto" }}>
          {plan === "premium" ? "From ₹99/mo" : "From ₹199/mo"}
        </span>
      )}
    </div>
  );
}

// ── Main component ──────────────────────────────────────
export default function TemplateGallery({ onSelectTemplate }) {

  const { activeTemplate, setActiveTemplate } = useResume();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const userPlan = user?.plan || "free";

  const canAccess = (id) => {
    const plan = getPlan(id);
    if (plan === "free") return isAuthenticated;
    if (plan === "premium") return isAuthenticated && (userPlan === "premium" || userPlan === "elite");
    if (plan === "elite") return isAuthenticated && userPlan === "elite";
    return false;
  };

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  // 🔥 MAIN FIX HERE
  const handleSelect = (id) => {
    const plan = getPlan(id);

    if (plan === "free" && !isAuthenticated) {
      showToast("Sign in to use this template", "login");
      return;
    }
    if (plan === "premium") {
      if (!isAuthenticated) {
        showToast("Sign in to access Pro templates", "login");
        return;
      }
      if (userPlan !== "premium" && userPlan !== "elite") {
        showToast("Upgrade to Pro to use this template", "upgrade");
        return;
      }
    }
    if (plan === "elite") {
      if (!isAuthenticated) {
        showToast("Sign in to access Elite templates", "login");
        return;
      }
      if (userPlan !== "elite") {
        showToast("Upgrade to Elite to use this template", "upgrade");
        return;
      }
    }

    // ✅ KEEP THIS
    setActiveTemplate(id);

    // 🔥 ADD THIS (IMPORTANT)
    if (onSelectTemplate) {
      onSelectTemplate(id);
    }
  };

  const freeTemplates    = ALL_TEMPLATES.filter(t => getPlan(t.id) === "free");
  const premiumTemplates = ALL_TEMPLATES.filter(t => getPlan(t.id) === "premium");
  const eliteTemplates   = ALL_TEMPLATES.filter(t => getPlan(t.id) === "elite");

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#f8f9fa", position: "relative" }}>

      {/* Toast */}
      {toast && (
        <div style={{
          position: "absolute", top: "8px", left: "8px", right: "8px", zIndex: 100,
          background: toast.type === "upgrade" ? "#4f46e5" : "#111827",
          color: "#fff", borderRadius: "8px", padding: "8px 12px",
          fontSize: "11px", fontWeight: "600", textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}>
          {toast.type === "upgrade" ? "⭐ " : "🔒 "}{toast.msg}
        </div>
      )}

      {/* Header */}
      <div style={{ padding: "10px 12px 8px", borderBottom: "1px solid #e5e7eb", background: "#fff", flexShrink: 0 }}>
        <p style={{ fontSize: "11px", fontWeight: "700", color: "#374151", margin: 0 }}>Choose Template</p>
        <p style={{ fontSize: "9px", color: "#9ca3af", margin: "1px 0 0" }}>{ALL_TEMPLATES.length} designs · click to apply</p>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "16px" }}>

        {/* ── FREE section ── */}
        <SectionHeader plan="free" count={freeTemplates.length} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 150px)", gap: "8px", padding: "4px 12px 12px" }}>
          {freeTemplates.map(({ id, name, Component }) => (
            <TemplateBox
              key={id} id={id} name={name} Component={Component}
              isActive={activeTemplate === id}
              locked={!canAccess(id)}
              plan="free"
              onSelect={() => handleSelect(id)}
            />
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#e5e7eb", margin: "0 12px 0" }} />

        {/* ── PREMIUM section ── */}
        <SectionHeader plan="premium" count={premiumTemplates.length} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 150px)", gap: "8px", padding: "4px 12px 12px" }}>
          {premiumTemplates.map(({ id, name, Component }) => (
            <TemplateBox
              key={id} id={id} name={name} Component={Component}
              isActive={activeTemplate === id}
              locked={!canAccess(id)}
              plan="premium"
              onSelect={() => handleSelect(id)}
            />
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#e5e7eb", margin: "0 12px 0" }} />

        {/* ── ELITE section ── */}
        <SectionHeader plan="elite" count={eliteTemplates.length} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 150px)", gap: "8px", padding: "4px 12px 12px" }}>
          {eliteTemplates.map(({ id, name, Component }) => (
            <TemplateBox
              key={id} id={id} name={name} Component={Component}
              isActive={activeTemplate === id}
              locked={!canAccess(id)}
              plan="elite"
              onSelect={() => handleSelect(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}