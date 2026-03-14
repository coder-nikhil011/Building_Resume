import React from "react";
import ResumeSections from "../BaseTemplate";

export default function Dark({ resume }) {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">{resume.personal.firstName} {resume.personal.lastName}</h1>
      <p>{resume.personal.email} | {resume.personal.phone}</p>
      <ResumeSections resume={resume} />

    </div>
  );
}