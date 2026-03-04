import React from "react";
export default function ClassicTemplate({ resume }) {
  const { personal, summary, experience, education, skills } = resume;

  return (
    <div className="bg-white p-4 rounded-lg shadow text-sm">
      <h1 className="text-lg font-bold">
        {personal.firstName} {personal.lastName}
      </h1>
      <p>{personal.email} | {personal.phone}</p>

      {summary && (
        <>
          <hr className="my-2" />
          <p>{summary}</p>
        </>
      )}

      {skills.length > 0 && (
        <>
          <hr className="my-2" />
          <p><strong>Skills:</strong> {skills.join(", ")}</p>
        </>
      )}
    </div>
  );
}