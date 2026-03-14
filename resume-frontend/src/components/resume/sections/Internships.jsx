import React from "react";

export default function Internships({ resume, setResume }) {

  const add = () =>
    setResume({
      ...resume,
      internships: [
        ...resume.internships,
        { title:"", role:"", start:"", end:"", city:"", state:"", description:"" }
      ]
    });

  const update = (i,k,v) => {
    const arr = [...resume.internships];
    arr[i][k] = v;
    setResume({...resume, internships:arr});
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-4">

      <h3 className="text-xl font-semibold">Internships</h3>

      {resume.internships.map((a,i)=>(
        <div key={i} className="space-y-3 bg-gray-50 p-4 rounded">

          <input
            placeholder="Job Title"
            className="input"
            value={a.title}
            onChange={(e)=>update(i,"title",e.target.value)}
          />

          <input
            placeholder="Role"
            className="input"
            value={a.role}
            onChange={(e)=>update(i,"role",e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              className="input"
              value={a.start}
              onChange={(e)=>update(i,"start",e.target.value)}
            />

            <input
              type="date"
              className="input"
              value={a.end}
              onChange={(e)=>update(i,"end",e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="City"
              className="input"
              value={a.city}
              onChange={(e)=>update(i,"city",e.target.value)}
            />

            <input
              placeholder="State"
              className="input"
              value={a.state}
              onChange={(e)=>update(i,"state",e.target.value)}
            />
          </div>

          <RichTextEditor
            value={a.description}
            onChange={(v)=>update(i,"description",v)}
          />

        </div>
      ))}

      <button
        onClick={add}
        className="text-indigo-600 text-sm"
      >
        + Add internship
      </button>

    </div>
  );
}