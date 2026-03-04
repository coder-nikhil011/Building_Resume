import React from "react";
export function Links({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      links: [...resume.links, { label: "", url: "" }],
    });

  const update = (i, k, v) => {
    const arr = [...resume.links];
    arr[i][k] = v;
    setResume({ ...resume, links: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-3">
      <h3 className="text-xl font-semibold">Websites & Social Links</h3>

      {resume.links.map((l, i) => (
        <div key={i} className="grid grid-cols-2 gap-3">
          <input
            placeholder="Label (LinkedIn, GitHub)"
            value={l.label}
            onChange={(e) => update(i, "label", e.target.value)}
            className="input"
          />
          <input
            placeholder="URL"
            value={l.url}
            onChange={(e) => update(i, "url", e.target.value)}
            className="input"
          />
        </div>
      ))}

      <button onClick={add} className="text-indigo-600 text-sm">
        + Add link
      </button>
    </div>
  );
}