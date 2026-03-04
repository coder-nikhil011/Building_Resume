import React from "react";
export default function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    { id: "personal", label: "Personal Details" },
    { id: "summary", label: "Summary" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-2">
      {sections.map((sec) => (
        <button
          key={sec.id}
          onClick={() => setActiveSection(sec.id)}
          className={`w-full text-left px-4 py-2 rounded-md font-medium transition
            ${
              activeSection === sec.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {sec.label}
        </button>
      ))}
    </div>
  );
}