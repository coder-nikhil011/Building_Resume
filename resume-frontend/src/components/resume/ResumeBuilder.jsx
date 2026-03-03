// src/components/resume/ResumeBuilder.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import ResumePreview from "./ResumePreview";
import ProgressBar from "./ProgressBar";
import TextArea from "./TextArea";
import Section from "./Section";
import Input from "./Input";
import React from "react";

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    personal: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  const completion =
    Object.keys(resume.personal).length * 5 +
    (resume.summary ? 15 : 0) +
    resume.experience.length * 15 +
    resume.education.length * 10 +
    resume.skills.length * 5;

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* LEFT */}
      <div className="col-span-12 md:col-span-3">
        <Sidebar />
      </div>

      {/* CENTER */}
      <div className="col-span-12 md:col-span-6 space-y-4">
        <ProgressBar value={Math.min(completion, 100)} />

        <PersonalDetails resume={resume} setResume={setResume} />
        <Summary resume={resume} setResume={setResume} />
        <Experience resume={resume} setResume={setResume} />
        <Education resume={resume} setResume={setResume} />
        <Skills resume={resume} setResume={setResume} />
      </div>

      {/* RIGHT */}
      <div className="col-span-12 md:col-span-3">
        <ResumePreview resume={resume} />
      </div>
    </div>
  );
}