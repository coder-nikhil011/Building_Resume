import React, { useState } from "react";
import html2pdf from "html2pdf.js";

import ResumeNavbar from "./ResumeNavbar";
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

const SECTIONS = [
  { id: "personal", label: "Personal", icon: "👤" },
  { id: "summary", label: "Summary", icon: "📝" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "links", label: "Links", icon: "🔗" },
  { id: "languages", label: "Languages", icon: "🌐" },
  { id: "courses", label: "Courses", icon: "📚" },
  { id: "hobbies", label: "Hobbies", icon: "🎯" },
  { id: "activities", label: "Activities", icon: "🏃" },
  { id: "internships", label: "Internships", icon: "🏢" },
  { id: "references", label: "References", icon: "👥" },
];

export default function ResumeBuilder() {
  const { resume, setResume, activeTemplate, setActiveTemplate, calculateProgress, saveResume } = useResume();

  const [activeTab, setActiveTab] = useState("edit");
  const [activeSection, setActiveSection] = useState("personal");
  const [saving, setSaving] = useState(false);

  const handleDownload = () => {
    const element = document.getElementById("resume-preview");
    const opt = {
      margin: 0,
      filename: `resume-${Date.now()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  const handleSave = async () => {
    setSaving(true);
    setTimeout(() => {
      saveResume("My Resume");
      setSaving(false);
    }, 600);
  };

  const progress = calculateProgress();

  const renderSection = () => {
    const props = { resume, setResume };
    switch (activeSection) {
      case "personal": return <PersonalDetails {...props} />;
      case "summary": return <Summary {...props} />;
      case "experience": return <Experience {...props} />;
      case "education": return <Education {...props} />;
      case "skills": return <Skills {...props} />;
      case "links": return <Links {...props} />;
      case "languages": return <Languages {...props} />;
      case "courses": return <Courses {...props} />;
      case "hobbies": return <Hobbies {...props} />;
      case "activities": return <Activities {...props} />;
      case "internships": return <Internships {...props} />;
      case "references": return <References {...props} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ResumeNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleDownload={handleDownload}
        handleSave={handleSave}
        saving={saving}
      />

      {activeTab === "edit" && (
        <div className="flex h-[calc(100vh-56px)]">
          {/* Sidebar — section list */}
          <aside className="w-48 bg-white border-r border-gray-100 overflow-y-auto flex-shrink-0">
            <div className="p-3">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2 px-2">Sections</p>
              {SECTIONS.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors mb-0.5 text-left ${
                    activeSection === id
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-base leading-none">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </aside>

          {/* Form area */}
          <div className="w-80 bg-white border-r border-gray-100 overflow-y-auto flex-shrink-0">
            <div className="p-4">
              <ProgressBar value={progress} />
              <div className="mt-4">
                {renderSection()}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex-1 overflow-auto bg-gray-100 flex items-start justify-center p-6">
            <div
              id="resume-preview"
              className="bg-white shadow-lg"
              style={{ width: "794px", minHeight: "1123px" }}
            >
              <ResumePreview resume={resume} activeTemplate={activeTemplate} />
            </div>
          </div>
        </div>
      )}

      {activeTab === "customize" && (
        <div className="p-6">
          <TemplateGallery setTemplate={setActiveTemplate} />
        </div>
      )}

      {activeTab === "ai" && (
        <div className="max-w-2xl mx-auto p-6">
          <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">AI Resume Review</h2>
            <p className="text-gray-500 text-sm mb-6">Get instant AI-powered feedback to improve your resume score and land more interviews.</p>
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
              Analyze my resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
}