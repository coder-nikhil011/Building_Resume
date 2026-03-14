import React from "react";

export default function TwoColumnLayout({ resume }) {

  const { personal, summary, experience, education, skills } = resume;

  return (
    <div className="grid grid-cols-2 gap-6 bg-white p-8 shadow-md max-w-[800px] mx-auto">

      <div>

        <h1 className="text-2xl font-bold">
          {personal.firstName} {personal.lastName}
        </h1>

        <h2 className="mt-4 font-semibold">Skills</h2>
        {skills.map((skill,i)=>(
          <p key={i} className="text-sm">{skill}</p>
        ))}

        <h2 className="mt-4 font-semibold">Education</h2>
        {education.map((edu,i)=>(
          <p key={i}>{edu.degree}</p>
        ))}

      </div>

      <div>

        <h2 className="font-semibold border-b">Experience</h2>

        {experience.map((exp,i)=>(
          <div key={i} className="mb-2">
            <p className="font-semibold">{exp.position}</p>
            <p className="text-sm">{exp.company}</p>
          </div>
        ))}

        <h2 className="mt-4 font-semibold border-b">Summary</h2>
        <p className="text-sm">{summary}</p>

      </div>

    </div>
  );
}