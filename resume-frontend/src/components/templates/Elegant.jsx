import React from "react";
export default function Elegant({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#fffef9", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "52px 56px" }}>
      <div style={{ textAlign: "center", borderBottom: "1px solid #d4a853", paddingBottom: "24px", marginBottom: "28px" }}>
        <h1 style={{ fontSize: "30px", fontWeight: "400", letterSpacing: "4px", textTransform: "uppercase", color: "#2c2c2c", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#d4a853", marginTop: "8px", letterSpacing: "3px", textTransform: "uppercase" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#888", marginTop: "8px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join("  ·  ")}</p>
      </div>
      {summary && <div style={{ marginBottom: "28px", textAlign: "center" }}><p style={{ fontSize: "13px", lineHeight: "1.9", color: "#555", fontStyle: "italic" }}>{summary}</p></div>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px", color: "#d4a853", textAlign: "center", marginBottom: "16px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "18px", textAlign: "center" }}>
              <strong style={{ fontSize: "14px", color: "#2c2c2c" }}>{exp.position}</strong>
              <p style={{ fontSize: "12px", color: "#888", fontStyle: "italic", margin: "2px 0" }}>{exp.company}  ·  {exp.startDate} – {exp.endDate || "Present"}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.7", marginTop: "6px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px", color: "#d4a853", textAlign: "center", marginBottom: "16px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ textAlign: "center", marginBottom: "10px" }}>
              <strong style={{ fontSize: "13px", color: "#2c2c2c" }}>{edu.degree}</strong>
              <p style={{ fontSize: "12px", color: "#888", fontStyle: "italic" }}>{edu.school}  ·  {edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "3px", color: "#d4a853", marginBottom: "12px" }}>Skills</h2>
          <p style={{ fontSize: "12px", color: "#666", lineHeight: "2.2" }}>{skills.join("  ·  ")}</p>
        </div>
      )}
    </div>
  );
}