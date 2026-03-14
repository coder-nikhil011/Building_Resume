import React from "react";

export default function ModernLayout({ resume }) {

  const { personal, summary, experience, education, skills } = resume;

  return (
    <div className="max-w-[800px] mx-auto shadow-lg">

      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="text-sm">{personal.email} | {personal.phone}</p>
      </div>

      <div className="bg-white p-6">

        <h2 className="font-semibold border-b mb-2">Summary</h2>
        <p className="text-sm mb-4">{summary}</p>

        <h2 className="font-semibold border-b mb-2">Experience</h2>
        {experience.map((exp,i)=>(
          <div key={i} className="mb-3">
            <p className="font-semibold">{exp.position}</p>
            <p className="text-sm">{exp.company}</p>
          </div>
        ))}

        <h2 className="font-semibold border-b mt-4 mb-2">Education</h2>
        {education.map((edu,i)=>(
          <p key={i}>{edu.degree}</p>
        ))}

      </div>

    </div>
  );
}