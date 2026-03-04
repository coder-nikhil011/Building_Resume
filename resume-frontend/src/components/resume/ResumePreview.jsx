import React from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

export default function ResumePreview({ resume, activeTemplate }) {
  if (!resume) return null;

  switch (activeTemplate) {
    case "modern":
      return <ModernTemplate resume={resume} />;
    case "minimal":
      return <MinimalTemplate resume={resume} />;
    default:
      return <ClassicTemplate resume={resume} />;
  }
}