import React from "react";

export default function TechLayout({ resume }) {

  const { personal, summary, experience, education, skills } = resume;

  return (
    <div className="max-w-[900px] mx-auto shadow-lg bg-white">

      <div className="grid grid-cols-3">

        {/* LEFT SIDEBAR */}
        <div className="bg-gray-900 text-white p-6">

          <h1 className="text-2xl font-bold mb-1">
            {personal.firstName || "Your"} {personal.lastName || "Name"}
          </h1>

          <p className="text-sm text-gray-300 mb-6">
            {personal.email || "email@example.com"}
          </p>

          {/* SKILLS */}
          <h2 className="text-lg font-semibold border-b border-gray-700 mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.length > 0 ? (
              skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-400">
                Add skills
              </p>
            )}
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-2 p-6">

          {/* SUMMARY */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b mb-2">
              Summary
            </h2>

            <p className="text-sm text-gray-700">
              {summary || "Write a short professional summary."}
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold border-b mb-2">
              Experience
            </h2>

            {experience.length > 0 ? (
              experience.map((exp, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold">
                    {exp.position} — {exp.company}
                  </p>

                  <p className="text-xs text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </p>

                  <p className="text-sm text-gray-700">
                    {exp.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                Add experience
              </p>
            )}
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-lg font-semibold border-b mb-2">
              Education
            </h2>

            {education.length > 0 ? (
              education.map((edu, i) => (
                <div key={i} className="mb-2">
                  <p className="font-semibold">
                    {edu.degree}
                  </p>

                  <p className="text-sm">
                    {edu.school}
                  </p>

                  <p className="text-xs text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                Add education
              </p>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}