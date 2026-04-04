// Executive.jsx
import React from "react";

export default function Executive({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#111827", color: "#fff", padding: "40px 48px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700", margin: 0, letterSpacing: "2px", textTransform: "uppercase" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#d1d5db", marginTop: "6px", letterSpacing: "3px", textTransform: "uppercase" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "24px", marginTop: "12px", fontSize: "11px", color: "#9ca3af" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ padding: "36px 48px" }}>
        {summary && <div style={{ marginBottom: "24px", borderLeft: "4px solid #111827", paddingLeft: "16px" }}><p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151", fontStyle: "italic" }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", color: "#6b7280", marginBottom: "12px" }}>Professional Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "14px", color: "#111827" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0", fontStyle: "italic" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: "1.7", marginTop: "6px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", color: "#6b7280", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#6b7280" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", color: "#6b7280", marginBottom: "12px" }}>Core Competencies</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
              {skills.map((s, i) => (
                <div key={i} style={{ fontSize: "12px", color: "#374151", padding: "6px 12px", background: "#f9fafb", borderLeft: "3px solid #111827" }}>{s}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}