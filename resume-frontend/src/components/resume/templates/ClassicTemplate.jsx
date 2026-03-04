import React from "react";

export default function ClassicTemplate({ resume }) {
  const {
    personal = {},
    summary = "",
    skills = [],
  } = resume || {};

  return (
    <div className="bg-white p-4 rounded-lg shadow text-sm space-y-2">
      <h1 className="text-lg font-bold">
        {personal.firstName} {personal.lastName}
      </h1>

      <p className="text-gray-600">
        {personal.email}
        {personal.phone && ` | ${personal.phone}`}
      </p>

      {summary && <p>{summary}</p>}

      {skills.length > 0 && (
        <p>
          <strong>Skills:</strong>{" "}
          {skills.map(s => `${s.name} (${s.level})`).join(", ")}
        </p>
      )}
    </div>
  );
}