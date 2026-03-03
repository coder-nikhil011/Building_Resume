import React from "react";
export default function Experience({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      experience: [...resume.experience, { role: "", company: "" }],
    });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Employment History</h3>

      {resume.experience.map((_, i) => (
        <input key={i} className="input mb-2" placeholder="Job Title" />
      ))}

      <button onClick={add} className="text-indigo-500 text-sm">
        + Add employment
      </button>
    </div>
  );
}