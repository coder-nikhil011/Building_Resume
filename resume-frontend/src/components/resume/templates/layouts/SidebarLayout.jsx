import React from "react";

export default function SidebarLayout({ resume }) {

  const { personal, summary, experience, education, skills } = resume;

  return (
    <div className="flex max-w-[800px] mx-auto shadow-lg">

      <div className="w-1/3 bg-gray-800 text-white p-6">
        <h1 className="text-xl font-bold">
          {personal.firstName} {personal.lastName}
        </h1>

        <p className="text-sm mt-2">{personal.email}</p>
        <p className="text-sm">{personal.phone}</p>

        <h2 className="mt-6 font-semibold">Skills</h2>
        {skills.map((skill,i)=>(
          <p key={i} className="text-sm">{skill}</p>
        ))}
      </div>

      <div className="w-2/3 bg-white p-6">

        <h2 className="font-semibold border-b mb-2">Summary</h2>
        <p className="text-sm mb-4">{summary}</p>

        <h2 className="font-semibold border-b mb-2">Experience</h2>
        {experience.map((exp,i)=>(
          <div key={i}>
            <p className="font-semibold">{exp.position}</p>
            <p className="text-sm">{exp.company}</p>
          </div>
        ))}

      </div>

    </div>
  );
}