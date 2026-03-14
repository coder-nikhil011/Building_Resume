import React from "react";

export default function BaseTemplate({ resume, templateName }) {

  const { personal, summary, experience, education, skills } = resume;

  const styles = {
    classic: "bg-white text-black",
    modern: "bg-white text-gray-800 border-t-8 border-blue-500",
    minimal: "bg-white text-gray-700",
    professional: "bg-gray-50 text-gray-900 border-l-4 border-gray-800",
    creative: "bg-white text-purple-800 border-t-8 border-purple-500",
    executive: "bg-white text-gray-900 border-t-8 border-black",
    elegant: "bg-white text-gray-700 font-serif",
    compact: "bg-white text-gray-800 text-sm",
    clean: "bg-white text-gray-900",
    corporate: "bg-white text-blue-900 border-t-8 border-blue-800",
    stylish: "bg-white text-pink-700 border-t-8 border-pink-500",
    gradient: "bg-gradient-to-r from-blue-50 to-purple-50",
    bold: "bg-white text-black border-l-8 border-black",
    clear: "bg-white text-gray-800",
    designer: "bg-white text-indigo-700 border-t-8 border-indigo-500",
    portfolio: "bg-gray-100 text-gray-900",
    timeline: "bg-white text-gray-800",
    sidebar: "bg-white text-gray-900 flex",
    simple: "bg-white text-gray-700",
    specialist: "bg-white text-green-800 border-t-8 border-green-500",
    managerial: "bg-white text-gray-900 border-t-8 border-gray-700",
    primeats: "bg-white text-orange-800 border-t-8 border-orange-500",
    twocolumn: "bg-white text-gray-900 grid grid-cols-2 gap-6"
  };

  return (
    <div className={`${styles[templateName]} p-8 shadow-md max-w-[800px] mx-auto`}>

      {/* HEADER */}
      <div className="border-b pb-3 mb-4">
        <h1 className="text-3xl font-bold">
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>

        <p className="text-sm text-gray-600">
          {(personal.email || "email@example.com")} |
          {(personal.phone || "+91 9876543210")} |
          {(personal.city || "City")}, {(personal.country || "Country")}
        </p>
      </div>

      {/* SUMMARY */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold border-b mb-1">Summary</h2>
        <p className="text-sm">
          {summary || "Write a short professional summary about yourself."}
        </p>
      </div>

      {/* EXPERIENCE */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold border-b mb-1">Experience</h2>

        {experience.length > 0 ? (
          experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold text-sm">
                {exp.position} — {exp.company}
              </p>
              <p className="text-xs text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            Add your work experience here.
          </p>
        )}
      </div>

      {/* EDUCATION */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold border-b mb-1">Education</h2>

        {education.length > 0 ? (
          education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold text-sm">{edu.degree}</p>
              <p className="text-sm">{edu.school}</p>
              <p className="text-xs text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            Add your education details here.
          </p>
        )}
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-lg font-semibold border-b mb-1">Skills</h2>

        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, i) => (
              <span key={i} className="text-xs border px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Add your skills here.
          </p>
        )}
      </div>

    </div>
  );
}