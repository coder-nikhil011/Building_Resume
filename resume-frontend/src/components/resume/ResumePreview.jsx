// src/components/resume/ResumePreview.jsx
import React from "react";
export default function ResumePreview({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white border rounded p-4">
      <h2 className="font-bold text-lg">
        {data.firstName || "Your Name"} {data.lastName}
      </h2>

      <p className="text-sm text-gray-600">{data.job}</p>

      <hr className="my-2" />

      <p className="text-sm">{data.summary}</p>

      <ul className="list-disc ml-5 mt-2 text-sm">
        {data.skills?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}