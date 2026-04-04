import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { Link, useNavigate } from "react-router-dom";

import ProgressBar from "./ProgressBar";
import ResumePreview from "../preview/ResumePreview";
import TemplateGallery from "../customize/TemplateGallery";

import PersonalDetails from "../sections/PersonalDetails";
import Summary from "../sections/Summary";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import { Links } from "../sections/Links";
import { Hobbies } from "../sections/Hobbies";
import { Languages } from "../sections/Languages";
import { Courses } from "../sections/Courses";
import Activities from "../sections/Activities";
import Internships from "../sections/Internships";
import References from "../sections/References";

import { useResume } from "../../../context/ResumeContext";
import { useAuth } from "../../../context/AuthContext";

const SECTIONS = [
  { id: "personal",    label: "Personal Details", icon: "👤" },
  { id: "summary",     label: "Summary",          icon: "📝" },
  { id: "experience",  label: "Experience",        icon: "💼" },
  { id: "education",   label: "Education",         icon: "🎓" },
  { id: "skills",      label: "Skills",            icon: "⚡" },
  { id: "links",       label: "Links",             icon: "🔗" },
  { id: "languages",   label: "Languages",         icon: "🌐" },
  { id: "courses",     label: "Courses",           icon: "📚" },
  { id: "hobbies",     label: "Hobbies",           icon: "🎯" },
  { id: "activities",  label: "Activities",        icon: "🏃" },
  { id: "internships", label: "Internships",       icon: "🏢" },
  { id: "references",  label: "References",        icon: "👥" },
];

// Login required modal
function LoginModal({ onClose, onLogin }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ background: "#fff", borderRadius: "20px", padding: "32px", maxWidth: "380px", width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" />
          </svg>
        </div>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111", margin: "0 0 8px" }}>Sign in required</h3>
        <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 24px", lineHeight: "1.6" }}>
          You need to sign in to save or download your resume. Your progress won't be lost!
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={onClose} style={{ flex: 1, padding: "10px", borderRadius: "12px", border: "1px solid #e5e7eb", background: "#fff", color: "#374151", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
            Continue editing
          </button>
          <button onClick={onLogin} style={{ flex: 1, padding: "10px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
            Sign in →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResumeBuilder() {
  const { resume, setResume, activeTemplate, setActiveTemplate, calculateProgress, saveResume } = useResume();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("personal");
  const [showTemplates, setShowTemplates] = useState(false);
  const [saving, setSaving] = useState(false);
  const [zoom, setZoom] = useState(0.9);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null); // "save" | "download"

  const progress = calculateProgress();

  const handleDownload = () => {
    if (!isAuthenticated) {
      setPendingAction("download");
      setShowLoginModal(true);
      return;
    }
    doDownload();
  };

  const doDownload = () => {
    const element = document.getElementById("resume-preview-inner");
    html2pdf().set({
      margin: 0,
      filename: `resume-${Date.now()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).from(element).save();
  };

  const handleSave = () => {
    if (!isAuthenticated) {
      setPendingAction("save");
      setShowLoginModal(true);
      return;
    }
    doSave();
  };

  const doSave = () => {
    setSaving(true);
    setTimeout(() => { saveResume("My Resume"); setSaving(false); }, 600);
  };

  const handleLoginRedirect = () => {
    // Store pending action in sessionStorage so we can resume after login
    if (pendingAction) sessionStorage.setItem("resumecraft_pending", pendingAction);
    navigate("/login");
  };

  const renderSection = () => {
    const props = { resume, setResume };
    switch (activeSection) {
      case "personal":    return <PersonalDetails {...props} />;
      case "summary":     return <Summary {...props} />;
      case "experience":  return <Experience {...props} />;
      case "education":   return <Education {...props} />;
      case "skills":      return <Skills {...props} />;
      case "links":       return <Links {...props} />;
      case "languages":   return <Languages {...props} />;
      case "courses":     return <Courses {...props} />;
      case "hobbies":     return <Hobbies {...props} />;
      case "activities":  return <Activities {...props} />;
      case "internships": return <Internships {...props} />;
      case "references":  return <References {...props} />;
      default:            return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">

      {/* Login modal */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLoginRedirect}
        />
      )}

      {/* Top Navbar */}
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5 flex-shrink-0 z-50">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-semibold text-gray-900">Resume Builder</span>
          {!isAuthenticated && (
            <span className="hidden sm:flex items-center gap-1 text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              Sign in to save your work
            </span>
          )}
        </div>

        {/* Tab toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setShowTemplates(false)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${!showTemplates ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
          >
            Edit Content
          </button>
          <button
            onClick={() => setShowTemplates(true)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${showTemplates ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
          >
            Templates
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {!isAuthenticated ? (
            <Link to="/login" className="flex items-center gap-1.5 text-sm bg-indigo-50 text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors font-medium">
              Sign in to save
            </Link>
          ) : (
            <button
              onClick={handleSave} disabled={saving}
              className="flex items-center gap-1.5 text-sm border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              {saving
                ? <div className="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" strokeLinecap="round" /><path d="M17 21v-8H7v8M7 3v5h8" strokeLinecap="round" /></svg>
              }
              {saving ? "Saving..." : "Save"}
            </button>
          )}
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
              <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </button>
        </div>
      </header>

      {/* Main 3-panel body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Panel 1: Template Gallery OR Section Sidebar */}
        <aside className="flex-shrink-0 overflow-hidden border-r border-gray-200" style={{ width: showTemplates ? "220px" : "200px" }}>
          {showTemplates ? (
            <TemplateGallery />
          ) : (
            <div className="h-full bg-white flex flex-col">
              <div className="px-4 py-3 border-b border-gray-100 flex-shrink-0">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Sections</p>
              </div>
              <nav className="overflow-y-auto flex-1 px-2 py-2">
                {SECTIONS.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors mb-0.5 text-left ${
                      activeSection === id ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span style={{ fontSize: "15px", lineHeight: 1 }}>{icon}</span>
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </aside>

        {/* Panel 2: Form */}
        {!showTemplates && (
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col overflow-hidden flex-shrink-0">
            <div className="px-4 pt-4 pb-2 border-b border-gray-100 flex-shrink-0">
              <ProgressBar value={progress} />
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {renderSection()}
            </div>
          </div>
        )}

        {/* Panel 3: Preview */}
        <div className="flex-1 bg-gray-200 overflow-auto flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-5 py-2 bg-gray-100 border-b border-gray-300 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium">Preview</span>
              <span className="text-xs text-gray-400">· A4</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(1)))} className="w-6 h-6 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-bold">−</button>
              <span className="text-xs text-gray-600 w-12 text-center font-medium">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(1.5, +(z + 0.1).toFixed(1)))} className="w-6 h-6 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-bold">+</button>
              <button onClick={() => setZoom(0.9)} className="text-xs text-gray-500 border border-gray-300 bg-white px-2 py-0.5 rounded hover:bg-gray-50 ml-1">Reset</button>
            </div>
          </div>

          {/* A4 paper */}
          <div className="flex-1 overflow-auto flex items-start justify-center py-8 px-4">
            <div style={{ width: `${794 * zoom}px`, minHeight: `${1123 * zoom}px`, transform: `scale(${zoom})`, transformOrigin: "top center", marginBottom: `${(zoom - 1) * 1123}px` }}>
              <div id="resume-preview-inner" className="bg-white shadow-2xl" style={{ width: "794px", minHeight: "1123px" }}>
                <ResumePreview resume={resume} activeTemplate={activeTemplate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}