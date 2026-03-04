import React, { useState } from "react";

import Sidebar from "./Sidebar";
import TemplateSelector from "./TemplateSelector";
import ResumePreview from "./ResumePreview";
import ProgressBar from "./ProgressBar";

import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState("personal");
  const [activeTemplate, setActiveTemplate] = useState("classic");

  const [resume, setResume] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* LEFT */}
      <div className="col-span-12 md:col-span-3 space-y-4">
        <TemplateSelector
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate}
        />

        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* CENTER */}
      <div className="col-span-12 md:col-span-6 space-y-4">
        <ProgressBar value={50} />

        {activeSection === "personal" && (
          <PersonalDetails resume={resume} setResume={setResume} />
        )}

        {activeSection === "summary" && (
          <Summary resume={resume} setResume={setResume} />
        )}

        {activeSection === "experience" && (
          <Experience resume={resume} setResume={setResume} />
        )}

        {activeSection === "education" && (
          <Education resume={resume} setResume={setResume} />
        )}

        {activeSection === "skills" && (
          <Skills resume={resume} setResume={setResume} />
        )}
      </div>

      {/* RIGHT */}
      <div className="col-span-12 md:col-span-3">
        <ResumePreview
          resume={resume}
          activeTemplate={activeTemplate}
        />
      </div>
    </div>
  );
}