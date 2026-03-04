import React from "react";
export function Activities({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      activities: [
        ...resume.activities,
        { title: "", role: "", start: "", end: "", city: "", description: "" },
      ],
    });

  const update = (i, k, v) => {
    const arr = [...resume.activities];
    arr[i][k] = v;
    setResume({ ...resume, activities: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-3">
      <h3 className="text-xl font-semibold">Extra Curricular Activities</h3>

      {resume.activities.map((a, i) => (
        <div key={i} className="space-y-2 bg-gray-50 p-3 rounded">
          <input placeholder="Function Title" className="input" onChange={(e)=>update(i,"title",e.target.value)} />
          <input placeholder="Your Role" className="input" onChange={(e)=>update(i,"role",e.target.value)} />
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="input" onChange={(e)=>update(i,"start",e.target.value)} />
            <input type="date" className="input" onChange={(e)=>update(i,"end",e.target.value)} />
          </div>
          <input placeholder="City" className="input" onChange={(e)=>update(i,"city",e.target.value)} />
          <textarea placeholder="Description (**bold**, _italic_, __underline__)" className="input" />
        </div>
      ))}

      <button onClick={add} className="text-indigo-600 text-sm">
        + Add activity
      </button>
    </div>
  );
}