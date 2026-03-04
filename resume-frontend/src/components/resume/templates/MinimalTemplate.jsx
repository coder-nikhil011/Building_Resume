import React from "react";

export default function MinimalTemplate({ resume }) {
  const {
    personal = {},
    summary = "",
    skills = [],
  } = resume || {};

  return (
    <div className="bg-white p-4 text-sm space-y-2">
      <h1 className="font-semibold text-lg">
        {personal.firstName} {personal.lastName}
      </h1>

      <p className="text-gray-500">{personal.email}</p>

      {summary && <p className="italic">{summary}</p>}

      {skills.length > 0 && (
        <p>
          <strong>Skills:</strong>{" "}
          {skills.map(s => s.name).join(", ")}
        </p>
      )}
    </div>
  );
}