import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import React from "react";

export default function ResumePreview({ resume, activeTemplate }) {
  switch (activeTemplate) {
    case "modern":
      return <ModernTemplate resume={resume} />;

    case "minimal":
      return <MinimalTemplate resume={resume} />;

    default:
      return <ClassicTemplate resume={resume} />;
  }
}