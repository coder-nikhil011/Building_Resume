import React from "react";

export default function Dark({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0f172a", color: "#e2e8f0", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "800", margin: 0, color: "#f8fafc" }}>
          {personal.firstName || "Your"} <span style={{ color: "#818cf8" }}>{personal.lastName || "Name"}</span>
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#818cf8", marginTop: "6px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", flexWrap: "wrap" }}>
          {personal.email && <span style={{ color: "#64748b" }}>✉ {personal.email}</span>}
          {personal.phone && <span style={{ color: "#64748b" }}>📞 {personal.phone}</span>}
          {personal.city && <span style={{ color: "#64748b" }}>📍 {personal.city}</span>}
        </div>
      </div>
      {summary && (
        <div style={{ marginBottom: "28px", padding: "18px 20px", background: "#1e293b", borderRadius: "10px", borderLeft: "4px solid #818cf8" }}>
          <p style={{ fontSize: "12px", lineHeight: "1.8", color: "#94a3b8", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "16px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", padding: "16px 18px", background: "#1e293b", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#f1f5f9" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#0f172a", color: "#818cf8", padding: "3px 10px", borderRadius: "12px", border: "1px solid #312e81" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#818cf8", margin: "4px 0", fontWeight: "600" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.7", marginTop: "6px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "14px", padding: "14px", background: "#1e293b", borderRadius: "8px" }}>
                <strong style={{ fontSize: "12px", color: "#f1f5f9" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#818cf8", margin: "3px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "10px", color: "#475569" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        <div>
          {skills.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#1e293b", color: "#c7d2fe", border: "1px solid #312e81", padding: "4px 12px", borderRadius: "4px" }}>{s}</span>)}
              </div>
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px" }}>Languages</h2>
              {languages.map((l, i) => <p key={i} style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px" }}>{l.name} <span style={{ color: "#475569" }}>– {l.level}</span></p>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}