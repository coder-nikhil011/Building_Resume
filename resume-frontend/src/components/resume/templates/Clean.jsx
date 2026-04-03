import React from "react";

export default function Clean({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#111", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#10b981", fontWeight: "500", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "16px", marginTop: "10px", fontSize: "12px", color: "#6b7280" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      {summary && (
        <div style={{ marginBottom: "24px", padding: "16px", background: "#f0fdf4", borderRadius: "8px" }}>
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#374151", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "600", color: "#10b981", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", display: "flex", gap: "16px" }}>
              <div style={{ width: "3px", background: "#10b981", borderRadius: "2px", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#10b981", margin: "2px 0", fontWeight: "500" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "600", color: "#10b981", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px", display: "flex", gap: "16px" }}>
              <div style={{ width: "3px", background: "#d1fae5", borderRadius: "2px", flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#10b981", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "13px", fontWeight: "600", color: "#10b981", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", border: "1px solid #10b981", color: "#10b981", padding: "3px 12px", borderRadius: "20px" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}