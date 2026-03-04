import React from "react";
export function References({ resume, setResume }) {
  const add = () =>
    setResume({
      ...resume,
      references: [...resume.references, { name: "", company: "", phone: "", email: "" }],
    });

  const update = (i, k, v) => {
    const arr = [...resume.references];
    arr[i][k] = v;
    setResume({ ...resume, references: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-3">
      <h3 className="text-xl font-semibold">References</h3>

      {resume.references.map((r, i) => (
        <div key={i} className="grid grid-cols-2 gap-3">
          <input placeholder="Name" className="input" onChange={(e)=>update(i,"name",e.target.value)} />
          <input placeholder="Company" className="input" onChange={(e)=>update(i,"company",e.target.value)} />
          <input placeholder="Phone" className="input" onChange={(e)=>update(i,"phone",e.target.value)} />
          <input placeholder="Email" className="input" onChange={(e)=>update(i,"email",e.target.value)} />
        </div>
      ))}

      <button onClick={add} className="text-indigo-600 text-sm">
        + Add reference
      </button>
    </div>
  );
}