import React from "react";
export default function TemplateSelector({ activeTemplate, setActiveTemplate }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow space-y-2">
      <button onClick={() => setActiveTemplate("classic")}>
        Classic
      </button>
      <button onClick={() => setActiveTemplate("modern")}>
        Modern
      </button>
      <button onClick={() => setActiveTemplate("minimal")}>
        Minimal
      </button>
    </div>
  );
}