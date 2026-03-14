import React from "react";

export default function ClassicLayout({ resume }) {
  const { personal, summary, experience, education, skills } = resume;

  return (
    <div className="bg-white p-8 shadow-md max-w-[800px] mx-auto">

      <h1 className="text-3xl font-bold border-b pb-2">
        {personal.firstName} {personal.lastName}
      </h1>

      <p className="text-sm text-gray-600 mb-4">
        {personal.email} | {personal.phone}
      </p>

      <h2 className="font-semibold border-b mb-2">Summary</h2>
      <p className="text-sm mb-4">{summary}</p>

      <h2 className="font-semibold border-b mb-2">Experience</h2>
      {experience.map((exp,i)=>(
        <div key={i} className="mb-2">
          <p className="font-semibold">{exp.position}</p>
          <p className="text-sm text-gray-500">{exp.company}</p>
        </div>
      ))}

      <h2 className="font-semibold border-b mt-4 mb-2">Education</h2>
      {education.map((edu,i)=>(
        <p key={i}>{edu.degree}</p>
      ))}

      <h2 className="font-semibold border-b mt-4 mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill,i)=>(
          <span key={i} className="border px-2 py-1 text-xs rounded">{skill}</span>
        ))}
      </div>

    </div>
  );
}