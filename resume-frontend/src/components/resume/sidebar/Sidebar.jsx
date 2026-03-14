import React from "react";

const sections = [
  { key: "personal", label: "Personal Details" },
  { key: "summary", label: "Summary" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "links", label: "Links" },
  { key: "courses", label: "Courses" },
  { key: "languages", label: "Languages" },
  { key: "hobbies", label: "Hobbies" },
  { key: "activities", label: "Activities" },
  { key: "internships", label: "Internships" },
  { key: "references", label: "References" },
];

export default function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="bg-white rounded-xl shadow p-3 space-y-1">
      {sections.map((s) => (
        <button
          key={s.key}
          onClick={() => setActiveSection(s.key)}
          className={`w-full text-left px-3 py-2 rounded text-sm ${
            activeSection === s.key
              ? "bg-indigo-100 text-indigo-600"
              : "hover:bg-gray-100"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}