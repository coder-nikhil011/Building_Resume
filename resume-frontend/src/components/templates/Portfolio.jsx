import React from "react";

export default function Portfolio({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0f172a", color: "#e2e8f0", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ marginBottom: "36px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", margin: 0, color: "#f8fafc" }}>{personal.firstName || "Your"}<span style={{ color: "#38bdf8" }}> {personal.lastName || "Name"}</span></h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#38bdf8", marginTop: "6px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "11px", color: "#64748b", flexWrap: "wrap" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      {summary && (
        <div style={{ marginBottom: "28px", padding: "20px", border: "1px solid #1e293b", borderRadius: "8px", borderLeft: "4px solid #38bdf8" }}>
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#94a3b8", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "14px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", padding: "16px", background: "#1e293b", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#f8fafc" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#0c4a6e", color: "#38bdf8", padding: "2px 10px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#38bdf8", margin: "3px 0", fontWeight: "500" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "12px", padding: "12px", background: "#1e293b", borderRadius: "8px" }}>
                <strong style={{ fontSize: "12px", color: "#f8fafc" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#38bdf8", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "10px", color: "#475569" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#1e293b", color: "#38bdf8", border: "1px solid #1e40af", padding: "4px 10px", borderRadius: "4px" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}