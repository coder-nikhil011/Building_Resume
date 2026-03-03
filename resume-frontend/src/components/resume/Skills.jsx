import React from "react";
export default function Skills({ resume, setResume }) {
  const add = (skill) =>
    setResume({ ...resume, skills: [...resume.skills, skill] });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Skills</h3>
      <input
        className="input"
        placeholder="Add skill and press Enter"
        onKeyDown={(e) => e.key === "Enter" && add(e.target.value)}
      />
    </div>
  );
}