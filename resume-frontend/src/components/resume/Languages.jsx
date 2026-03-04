import React from "react";
export function Languages({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      languages: [...resume.languages, { name: "", level: "Normal" }],
    });

  const update = (i, k, v) => {
    const arr = [...resume.languages];
    arr[i][k] = v;
    setResume({ ...resume, languages: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-3">
      <h3 className="text-xl font-semibold">Languages</h3>

      {resume.languages.map((l, i) => (
        <div key={i} className="grid grid-cols-2 gap-3">
          <input
            placeholder="Language"
            value={l.name}
            onChange={(e) => update(i, "name", e.target.value)}
            className="input"
          />
          <select
            value={l.level}
            onChange={(e) => update(i, "level", e.target.value)}
            className="input"
          >
            <option>Normal</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>
      ))}

      <button onClick={add} className="text-indigo-600 text-sm">
        + Add language
      </button>
    </div>
  );
}