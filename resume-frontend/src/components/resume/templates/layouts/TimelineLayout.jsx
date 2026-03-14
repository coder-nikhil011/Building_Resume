import React from "react";

export default function TimelineLayout({ resume }) {

  const { personal, experience } = resume;

  return (
    <div className="bg-white p-8 shadow-md max-w-[800px] mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        {personal.firstName} {personal.lastName}
      </h1>

      <div className="border-l-4 border-blue-500 pl-4">

        {experience.map((exp,i)=>(
          <div key={i} className="mb-4">
            <p className="font-semibold">{exp.position}</p>
            <p className="text-sm text-gray-500">{exp.company}</p>
            <p className="text-xs">{exp.startDate} - {exp.endDate}</p>
          </div>
        ))}

      </div>

    </div>
  );
}