import React from "react";

export default function ATSModern({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "3px solid #0f766e", paddingBottom: "16px", marginBottom: "20px" }}>
        <div>
          <h1 style={{ fontSize: "26px", fontWeight: "700", color: "#134e4a", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
            {personal.firstName || "Your"} {personal.lastName || "Name"}
          </h1>
          {personal.jobTitle && <p style={{ fontSize: "13px", color: "#0f766e", fontWeight: "600", margin: "4px 0 0" }}>{personal.jobTitle}</p>}
        </div>
        <div style={{ textAlign: "right", fontSize: "11px", color: "#374151", lineHeight: "1.9" }}>
          {personal.email && <p style={{ margin: 0 }}>{personal.email}</p>}
          {personal.phone && <p style={{ margin: 0 }}>{personal.phone}</p>}
          {personal.city && <p style={{ margin: 0 }}>{personal.city}{personal.country ? `, ${personal.country}` : ""}</p>}
        </div>
      </div>

      {summary && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#0f766e", margin: "0 0 8px" }}>Professional Summary</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151", margin: 0 }}>{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#0f766e", borderBottom: "1px solid #99f6e4", paddingBottom: "6px", margin: "0 0 12px" }}>Work Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#134e4a" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#6b7280", background: "#f0fdfa", padding: "2px 8px", borderRadius: "4px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#0f766e", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#0f766e", borderBottom: "1px solid #99f6e4", paddingBottom: "6px", margin: "0 0 12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong style={{ fontSize: "13px", color: "#134e4a" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#0f766e", margin: "2px 0" }}>{edu.school}</p>
              </div>
              <span style={{ fontSize: "11px", color: "#6b7280" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#0f766e", borderBottom: "1px solid #99f6e4", paddingBottom: "6px", margin: "0 0 10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#f0fdfa", color: "#0f766e", border: "1px solid #99f6e4", padding: "3px 12px", borderRadius: "4px", fontWeight: "500" }}>{s}</span>)}
          </div>
        </div>
      )}

      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#0f766e", borderBottom: "1px solid #99f6e4", paddingBottom: "6px", margin: "0 0 10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {languages.map((l, i) => <span key={i} style={{ fontSize: "12px", color: "#374151" }}>{l.name} <span style={{ color: "#6b7280" }}>({l.level})</span></span>)}
          </div>
        </div>
      )}
    </div>
  );
}