import React, { useState } from "react";
import html2pdf from "html2pdf.js";

import ResumeNavbar from "./ResumeNavbar";
import ProgressBar from "./ProgressBar";

import ResumePreview from "../preview/ResumePreview";
import TemplateGallery from "../customize/TemplateGallery";

import PersonalDetails from "../sections/PersonalDetails";
import Summary from "../sections/Summary";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import { Links } from "../sections/Links";
import { Hobbies } from "../sections/Hobbies";
import { Languages } from "../sections/Languages";
import { Courses } from "../sections/Courses";
import Activities from "../sections/Activities";
import Internships from "../sections/Internships";
import References from "../sections/References";

export default function ResumeBuilder() {

  const [activeTab, setActiveTab] = useState("edit");
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
    links: [],
    courses: [],
    languages: [],
    hobbies: "",
    activities: [],
    internships: [],
    references: [],
  });

  function calculateProgress(resume) {

    let score = 0;
    let total = 9;

    if (
      resume.personal.firstName &&
      resume.personal.lastName &&
      resume.personal.email &&
      resume.personal.phone
    ) score++;

    if (resume.summary) score++;
    if (resume.experience.length > 0) score++;
    if (resume.education.length > 0) score++;
    if (resume.skills.length > 0) score++;
    if (resume.links.length > 0) score++;
    if (resume.internships.length > 0) score++;
    if (resume.hobbies) score++;
    if (resume.languages.length > 0) score++;

    return Math.round((score / total) * 100);
  }

  const handleDownload = () => {

    const element = document.getElementById("resume-preview");

    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (

    <div className="p-4 space-y-4">

      <ResumeNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleDownload={handleDownload}
      />

      {activeTab === "edit" && (

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-2 space-y-2">

            {[
              "personal","summary","experience","education","skills","links",
              "courses","languages","hobbies","activities","internships","references"
            ].map((section) => (

              <div
                key={section}
                onClick={() => setActiveSection(section)}
                className="border p-2 cursor-pointer capitalize"
              >
                {section}
              </div>

            ))}

          </div>

          <div className="col-span-4 space-y-4">

            <ProgressBar value={calculateProgress(resume)} />

            {activeSection === "personal" &&
              <PersonalDetails resume={resume} setResume={setResume} />}

            {activeSection === "summary" &&
              <Summary resume={resume} setResume={setResume} />}

            {activeSection === "experience" &&
              <Experience resume={resume} setResume={setResume} />}

            {activeSection === "education" &&
              <Education resume={resume} setResume={setResume} />}

            {activeSection === "skills" &&
              <Skills resume={resume} setResume={setResume} />}
          </div>

          <div className="col-span-6">

            <div id="resume-preview">
              <ResumePreview
                resume={resume}
                activeTemplate={activeTemplate}
              />
            </div>

          </div>

        </div>

      )}

      {activeTab === "customize" && (
        <TemplateGallery setTemplate={setActiveTemplate} />
      )}

      {activeTab === "ai" && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold">AI Resume Review</h2>
        </div>
      )}

    </div>

  );
}