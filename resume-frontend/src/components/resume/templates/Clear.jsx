import React from "react";

export default function Clear({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px 56px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "600", color: "#111", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "8px", fontSize: "11px", color: "#9ca3af" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ height: "2px", background: "#f3f4f6", marginBottom: "24px" }} />
      {summary && <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#4b5563", marginBottom: "24px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#9ca3af", marginBottom: "14px" }}>Work Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "16px" }}>
              <div style={{ width: "90px", flexShrink: 0, paddingTop: "2px" }}>
                <p style={{ fontSize: "10px", color: "#9ca3af", lineHeight: "1.5", margin: 0 }}>{exp.startDate}<br />– {exp.endDate || "Present"}</p>
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#9ca3af", marginBottom: "14px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "12px" }}>
              <div style={{ width: "90px", flexShrink: 0 }}>
                <p style={{ fontSize: "10px", color: "#9ca3af", margin: 0 }}>{edu.startDate} – {edu.endDate}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#111" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#9ca3af", marginBottom: "12px" }}>Skills</h2>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "2.2" }}>{skills.join("  /  ")}</p>
        </div>
      )}
    </div>
  );
}