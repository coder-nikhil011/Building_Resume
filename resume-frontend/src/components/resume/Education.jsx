import React from "react";
export default function Education({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      education: [...resume.education, { school: "" }],
    });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Education</h3>
      <button onClick={add} className="text-indigo-500 text-sm">
        + Add education
      </button>
    </div>
  );
}