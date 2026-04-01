import React from "react";
import { useResume } from "../../../context/ResumeContext";

// ─── Import all template images ──────────────────────────
import classic from "../../../assets/templates/classic.png";
import modern from "../../../assets/templates/modern.png";
import minimal from "../../../assets/templates/minimal.png";
import professional from "../../../assets/templates/professional.png";
import creative from "../../../assets/templates/creative.png";
import executive from "../../../assets/templates/executive.png";
import elegant from "../../../assets/templates/elegant.png";
import compact from "../../../assets/templates/compact.png";
import clean from "../../../assets/templates/clean.png";
import corporate from "../../../assets/templates/corporate.png";
import stylish from "../../../assets/templates/stylish.png";
import gradient from "../../../assets/templates/gradient.png";
import bold from "../../../assets/templates/bold.png";
import timeline from "../../../assets/templates/timeline.png";
import sidebar from "../../../assets/templates/sidebar.png";
import portfolio from "../../../assets/templates/portfolio.png";
import designer from "../../../assets/templates/designer.png";
import clear from "../../../assets/templates/clear.png";
import managerial from "../../../assets/templates/managerial.png";
import simple from "../../../assets/templates/simple.png";
import specialist from "../../../assets/templates/specialist.png";
import twocolumn from "../../../assets/templates/twocolumn.png";

const TEMPLATES = [
  { id: "classic",      name: "Classic",      image: classic,      tag: "Popular" },
  { id: "modern",       name: "Modern",       image: modern,       tag: "Popular" },
  { id: "minimal",      name: "Minimal",      image: minimal,      tag: null },
  { id: "professional", name: "Professional", image: professional, tag: "Popular" },
  { id: "creative",     name: "Creative",     image: creative,     tag: null },
  { id: "executive",    name: "Executive",    image: executive,    tag: null },
  { id: "elegant",      name: "Elegant",      image: elegant,      tag: null },
  { id: "compact",      name: "Compact",      image: compact,      tag: null },
  { id: "clean",        name: "Clean",        image: clean,        tag: null },
  { id: "corporate",    name: "Corporate",    image: corporate,    tag: null },
  { id: "stylish",      name: "Stylish",      image: stylish,      tag: null },
  { id: "gradient",     name: "Gradient",     image: gradient,     tag: "New" },
  { id: "bold",         name: "Bold",         image: bold,         tag: null },
  { id: "timeline",     name: "Timeline",     image: timeline,     tag: null },
  { id: "sidebar",      name: "Sidebar",      image: sidebar,      tag: null },
  { id: "portfolio",    name: "Portfolio",    image: portfolio,    tag: null },
  { id: "designer",     name: "Designer",     image: designer,     tag: null },
  { id: "clear",        name: "Clear",        image: clear,        tag: null },
  { id: "managerial",   name: "Managerial",   image: managerial,   tag: null },
  { id: "simple",       name: "Simple",       image: simple,       tag: null },
  { id: "specialist",   name: "Specialist",   image: specialist,   tag: null },
  { id: "twocolumn",    name: "Two Column",   image: twocolumn,    tag: null },
];

export default function TemplateGallery() {
  const { activeTemplate, setActiveTemplate } = useResume();

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-white flex-shrink-0">
        <h3 className="text-sm font-semibold text-gray-800">Templates</h3>
        <p className="text-xs text-gray-400 mt-0.5">{TEMPLATES.length} designs available</p>
      </div>

      {/* Scrollable list */}
      <div className="overflow-y-auto flex-1 px-3 py-3 space-y-2">
        {TEMPLATES.map((t) => {
          const isActive = activeTemplate === t.id;
          return (
            <div
              key={t.id}
              onClick={() => setActiveTemplate(t.id)}
              className={`group relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                isActive
                  ? "border-indigo-500 shadow-md shadow-indigo-100"
                  : "border-transparent hover:border-indigo-200 hover:shadow-sm"
              }`}
            >
              {/* Template image */}
              <div className="relative bg-white">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full object-top object-cover"
                  style={{ height: "260px" }}
                />

                {/* Selected overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-indigo-600/10 flex items-center justify-center">
                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow border border-indigo-100">
                      Use this template
                    </span>
                  </div>
                )}

                {/* Tag badge */}
                {t.tag && (
                  <div className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    t.tag === "New"
                      ? "bg-green-100 text-green-700"
                      : "bg-indigo-100 text-indigo-700"
                  }`}>
                    {t.tag}
                  </div>
                )}
              </div>

              {/* Name row */}
              <div className={`px-3 py-2 flex items-center justify-between ${
                isActive ? "bg-indigo-50" : "bg-white"
              }`}>
                <span className={`text-sm font-medium ${
                  isActive ? "text-indigo-700" : "text-gray-700"
                }`}>
                  {t.name}
                </span>
                {isActive && (
                  <span className="text-xs text-indigo-500 font-medium">Selected</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}