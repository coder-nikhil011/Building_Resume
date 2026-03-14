import React from "react";

export default function CompactLayout({ resume }) {

  const { personal, summary, skills } = resume;

  return (
    <div className="bg-white p-6 text-sm shadow-md max-w-[800px] mx-auto">

      <h1 className="text-xl font-bold">
        {personal.firstName} {personal.lastName}
      </h1>

      <p className="text-xs text-gray-600">
        {personal.email} | {personal.phone}
      </p>

      <p className="mt-3">{summary}</p>

      <div className="flex flex-wrap gap-1 mt-3">
        {skills.map((skill,i)=>(
          <span key={i} className="border px-1">{skill}</span>
        ))}
      </div>

    </div>
  );
}