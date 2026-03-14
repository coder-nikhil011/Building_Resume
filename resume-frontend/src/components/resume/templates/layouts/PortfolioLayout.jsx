import React from "react";

export default function PortfolioLayout({ resume }) {

  const { personal, summary, skills } = resume;

  return (
    <div className="bg-gray-100 p-8 shadow-md max-w-[800px] mx-auto text-center">

      <h1 className="text-3xl font-bold">
        {personal.firstName} {personal.lastName}
      </h1>

      <p className="text-gray-600">{personal.email}</p>

      <p className="mt-4">{summary}</p>

      <div className="flex justify-center flex-wrap gap-2 mt-4">
        {skills.map((skill,i)=>(
          <span key={i} className="bg-gray-200 px-2 py-1 rounded">{skill}</span>
        ))}
      </div>

    </div>
  );
}