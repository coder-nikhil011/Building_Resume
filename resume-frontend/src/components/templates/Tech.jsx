import React from "react";

export default function Tech({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      <div style={{ background: "#1e1e1e", borderRadius: "8px", padding: "24px 28px", marginBottom: "28px" }}>
        <p style={{ fontSize: "10px", color: "#6b7280", margin: "0 0 8px", fontFamily: "'Courier New', monospace" }}>$ whoami</p>
        <h1 style={{ fontSize: "26px", fontWeight: "700", color: "#22c55e", margin: 0, fontFamily: "'Courier New', monospace" }}>
          {personal.firstName || "Your"}_{personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#64748b", marginTop: "4px", fontFamily: "'Courier New', monospace" }}>// {personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "10px", flexWrap: "wrap" }}>
          {personal.email && <span style={{ color: "#6ee7b7", fontFamily: "'Courier New', monospace" }}>{personal.email}</span>}
          {personal.phone && <span style={{ color: "#6ee7b7", fontFamily: "'Courier New', monospace" }}>{personal.phone}</span>}
          {personal.city && <span style={{ color: "#6ee7b7", fontFamily: "'Courier New', monospace" }}>{personal.city}</span>}
        </div>
      </div>
      {summary && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "6px", fontFamily: "'Courier New', monospace" }}>{"// about_me"}</p>
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#374151" }}>{summary}</p>
        </div>
      )}
      {skills.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "10px", fontFamily: "'Courier New', monospace" }}>{"const skills = ["}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingLeft: "16px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0", padding: "4px 12px", borderRadius: "4px", fontFamily: "'Courier New', monospace" }}>"{s}"</span>)}
          </div>
          <p style={{ fontSize: "11px", color: "#22c55e", marginTop: "8px", fontFamily: "'Courier New', monospace" }}>{"];"}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>{"// work_experience"}</p>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", borderLeft: "3px solid #22c55e", paddingLeft: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#f0fdf4", color: "#15803d", padding: "2px 8px", borderRadius: "4px", border: "1px solid #bbf7d0", fontFamily: "'Courier New', monospace" }}>{exp.startDate} → {exp.endDate || "now"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#22c55e", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "12px", fontFamily: "'Courier New', monospace" }}>{"// education"}</p>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "12px", borderLeft: "3px solid #bbf7d0", paddingLeft: "14px" }}>
              <strong style={{ fontSize: "13px", color: "#111" }}>{edu.degree}</strong>
              <p style={{ fontSize: "12px", color: "#22c55e", margin: "2px 0" }}>{edu.school}</p>
              <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}