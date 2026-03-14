import React from "react";
import { templates } from "../../context/data/templates";

export default function TemplateSelector({ activeTemplate, setActiveTemplate }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow grid grid-cols-2 gap-3">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => setActiveTemplate(template.id)}
          className={`p-2 border rounded-lg ${
            activeTemplate === template.id
              ? "border-blue-500"
              : "border-gray-200"
          }`}
        >
          <img
            src={template.image}
            alt={template.name}
            className="w-full h-24 object-cover rounded"
          />
          <p className="text-sm mt-1">{template.name}</p>
        </button>
      ))}
    </div>
  );
}