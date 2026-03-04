import React from "react";
export default function TemplateSelector({ activeTemplate, setActiveTemplate }) {
  const templates = [
    { id: "classic", name: "Classic" },
    { id: "modern", name: "Modern" },
    { id: "minimal", name: "Minimal" },
  ];

  return (
    <div className="bg-white p-3 rounded-lg shadow space-y-2">
      <h3 className="font-semibold text-sm">Templates</h3>

      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => setActiveTemplate(t.id)}
          className={`w-full py-2 rounded-md text-sm font-medium transition
            ${
              activeTemplate === t.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}