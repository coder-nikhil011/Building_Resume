import React from "react";
export default function Summary({ resume, setResume }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>

      <textarea
        rows="6"
        value={resume.summary}
        onChange={(e) =>
          setResume({ ...resume, summary: e.target.value })
        }
        placeholder="Write your professional summary..."
        className="w-full border rounded-md p-2"
      />
    </div>
  );
}