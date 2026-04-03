import React from "react";

export default function Simple({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px 52px" }}>
      <h1 style={{ fontSize: "26px", fontWeight: "600", color: "#111", margin: "0 0 4px" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
      {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px" }}>{personal.jobTitle}</p>}
      <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "24px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join(" · ")}</p>
      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: "22px" }} />
      {summary && <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#555", marginBottom: "22px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#111", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#111", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <div>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{edu.school}</p>
              </div>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#111", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#f3f4f6", color: "#374151", padding: "4px 12px", borderRadius: "4px" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}