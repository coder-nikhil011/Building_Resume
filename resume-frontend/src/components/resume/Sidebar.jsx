// src/components/resume/Sidebar.jsx
import React from "react";
export default function Sidebar() {
  const sections = [
    "Personal Details",
    "Summary",
    "Accomplishments",
    "Employment History",
    "Education",
    "Websites & Links",
    "Skills",
    "Languages",
    "References",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-2">
      <h2 className="font-semibold mb-3">Resume Sections</h2>
      {sections.map((s) => (
        <button
          key={s}
          className="w-full text-left px-3 py-2 rounded hover:bg-indigo-50 text-sm"
        >
          {s}
        </button>
      ))}
    </div>
  );
}