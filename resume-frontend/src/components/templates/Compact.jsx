import React from "react";

export default function Compact({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "32px 40px", fontSize: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "2px solid #374151", paddingBottom: "12px", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", margin: 0, color: "#111" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
          {personal.jobTitle && <p style={{ fontSize: "11px", color: "#6b7280", margin: "2px 0" }}>{personal.jobTitle}</p>}
        </div>
        <div style={{ textAlign: "right", fontSize: "10px", color: "#6b7280", lineHeight: "1.8" }}>
          {personal.email && <p style={{ margin: 0 }}>{personal.email}</p>}
          {personal.phone && <p style={{ margin: 0 }}>{personal.phone}</p>}
          {personal.city && <p style={{ margin: 0 }}>{personal.city}</p>}
        </div>
      </div>
      {summary && <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#374151", marginBottom: "14px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#374151", marginBottom: "8px", borderBottom: "1px solid #e5e7eb", paddingBottom: "3px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "11px" }}>{exp.position}</strong> <span style={{ color: "#6b7280" }}>@ {exp.company}</span>
                {exp.description && <p style={{ fontSize: "10px", color: "#555", margin: "2px 0", lineHeight: "1.5" }}>{exp.description}</p>}
              </div>
              <span style={{ fontSize: "10px", color: "#9ca3af", whiteSpace: "nowrap", marginLeft: "12px" }}>{exp.startDate} – {exp.endDate || "Now"}</span>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#374151", marginBottom: "8px", borderBottom: "1px solid #e5e7eb", paddingBottom: "3px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span><strong style={{ fontSize: "11px" }}>{edu.degree}</strong> <span style={{ color: "#6b7280" }}>— {edu.school}</span></span>
              <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#374151", marginBottom: "8px", borderBottom: "1px solid #e5e7eb", paddingBottom: "3px" }}>Skills</h2>
          <p style={{ fontSize: "11px", color: "#374151" }}>{skills.join(" · ")}</p>
        </div>
      )}
    </div>
  );
}