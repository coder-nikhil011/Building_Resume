import React from "react";
export default function Summary({ resume, setResume }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Professional Summary</h3>
      <textarea
        className="w-full border rounded p-2"
        rows="4"
        placeholder="Write a short professional summary..."
        onChange={(e) => setResume({ ...resume, summary: e.target.value })}
      />
      <button className="mt-2 text-indigo-500 text-sm">✨ Ask AI writer</button>
    </div>
  );
}