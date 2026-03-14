// src/pages/BuildResume.jsx
import React from "react";
import ResumeBuilder from "../components/resume/builder/ResumeBuilder";

export default function BuildResume() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ResumeBuilder />
    </div>
  );
}