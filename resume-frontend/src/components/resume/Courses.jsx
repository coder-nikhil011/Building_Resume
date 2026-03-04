import React from "react";
export function Courses({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      courses: [
        ...resume.courses,
        { name: "", institute: "", start: "", end: "" },
      ],
    });

  const update = (i, k, v) => {
    const arr = [...resume.courses];
    arr[i][k] = v;
    setResume({ ...resume, courses: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-3">
      <h3 className="text-xl font-semibold">Courses</h3>

      {resume.courses.map((c, i) => (
        <div key={i} className="space-y-2">
          <input
            placeholder="Course Name"
            value={c.name}
            onChange={(e) => update(i, "name", e.target.value)}
            className="input"
          />
          <input
            placeholder="Institute Name"
            value={c.institute}
            onChange={(e) => update(i, "institute", e.target.value)}
            className="input"
          />
          <div className="grid grid-cols-2 gap-2">
            <input type="date" onChange={(e) => update(i, "start", e.target.value)} className="input" />
            <input type="date" onChange={(e) => update(i, "end", e.target.value)} className="input" />
          </div>
        </div>
      ))}

      <button onClick={add} className="text-indigo-600 text-sm">
        + Add course
      </button>
    </div>
  );
}