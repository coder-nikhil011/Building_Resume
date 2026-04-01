import React from "react";

export default function Minimal({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;

  return (
    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", background: "#fff", color: "#333", padding: "60px 56px", minHeight: "1123px", width: "794px", boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "300", letterSpacing: "3px", textTransform: "uppercase", margin: 0, color: "#111" }}>
        {personal.firstName || "Your"} {personal.lastName || "Name"}
      </h1>
      {personal.jobTitle && <p style={{ fontSize: "12px", color: "#999", marginTop: "6px", letterSpacing: "2px", textTransform: "uppercase" }}>{personal.jobTitle}</p>}
      <div style={{ display: "flex", gap: "16px", marginTop: "10px", fontSize: "11px", color: "#aaa" }}>
        {personal.email && <span>{personal.email}</span>}
        {personal.phone && <span>{personal.phone}</span>}
        {personal.city && <span>{personal.city}</span>}
      </div>
      <div style={{ height: "1px", background: "#e5e5e5", margin: "24px 0" }} />

      {summary && (
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#555", fontWeight: "300" }}>{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "16px" }}>Experience</p>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "20px" }}>
              <div style={{ width: "120px", flexShrink: 0 }}>
                <p style={{ fontSize: "10px", color: "#aaa", lineHeight: "1.5" }}>{exp.startDate}<br />{exp.endDate || "Present"}</p>
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "13px", color: "#222" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#888", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#666", marginTop: "4px", lineHeight: "1.6", fontWeight: "300" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "16px" }}>Education</p>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>
              <div style={{ width: "120px", flexShrink: 0 }}>
                <p style={{ fontSize: "10px", color: "#aaa" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#222" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#888", margin: "2px 0" }}>{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "12px" }}>Skills</p>
          <p style={{ fontSize: "12px", color: "#666", lineHeight: "2" }}>{skills.join("  ·  ")}</p>
        </div>
      )}
    </div>
  );
}