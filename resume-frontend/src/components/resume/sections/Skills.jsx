import React, { useState } from "react";

export default function Skills({ resume, setResume }) {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("Normal");

  const add = () => {
    if (!skill) return;
    setResume({
      ...resume,
      skills: [...resume.skills, { name: skill, level }],
    });
    setSkill("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2">
      <h3 className="font-semibold">Skills</h3>

      <input
        className="input"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Skill name"
      />

      <select
        className="input"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option>Normal</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </select>

      <button onClick={add} className="text-indigo-500 text-sm">
        + Add skill
      </button>
    </div>
  );
}