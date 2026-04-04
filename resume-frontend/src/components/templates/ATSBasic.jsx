import React from "react";

export default function ATSBasic({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "36px 44px" }}>
      <div style={{ borderBottom: "2px solid #000", paddingBottom: "12px", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#000", margin: "0 0 4px", textTransform: "uppercase" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#333", margin: "0 0 6px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#333", margin: 0 }}>
          {[personal.email, personal.phone, personal.city].filter(Boolean).join(" | ")}
        </p>
      </div>
      {summary && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", margin: "0 0 6px" }}>SUMMARY</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.6", color: "#222", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", borderBottom: "1px solid #999", paddingBottom: "4px", margin: "0 0 10px" }}>EXPERIENCE</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#000" }}>{exp.position} — {exp.company}</strong>
                <span style={{ fontSize: "11px", color: "#555" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              {exp.description && <p style={{ fontSize: "11px", color: "#333", lineHeight: "1.6", margin: "4px 0 0" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", borderBottom: "1px solid #999", paddingBottom: "4px", margin: "0 0 10px" }}>EDUCATION</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#000" }}>{edu.degree} — {edu.school}</strong>
                <span style={{ fontSize: "11px", color: "#555" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", borderBottom: "1px solid #999", paddingBottom: "4px", margin: "0 0 8px" }}>SKILLS</h2>
          <p style={{ fontSize: "12px", color: "#222", margin: 0 }}>{skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
}