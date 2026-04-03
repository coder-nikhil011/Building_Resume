import React from "react";

export default function Sidebar({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ width: "240px", background: "#f97316", color: "#fff", padding: "36px 20px", flexShrink: 0 }}>
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", fontWeight: "700" }}>{(personal.firstName || "Y").charAt(0)}</div>
        <h1 style={{ fontSize: "16px", fontWeight: "700", textAlign: "center", margin: "0 0 4px" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "10px", color: "#fed7aa", textAlign: "center", marginBottom: "20px" }}>{personal.jobTitle}</p>}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "16px", marginBottom: "16px" }}>
          <p style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>Contact</p>
          {personal.email && <p style={{ fontSize: "10px", color: "#fff", marginBottom: "4px", wordBreak: "break-all" }}>{personal.email}</p>}
          {personal.phone && <p style={{ fontSize: "10px", color: "#fff", marginBottom: "4px" }}>{personal.phone}</p>}
          {personal.city && <p style={{ fontSize: "10px", color: "#fff" }}>{personal.city}</p>}
        </div>
        {skills.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "16px", marginBottom: "16px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>Skills</p>
            {skills.map((s, i) => <p key={i} style={{ fontSize: "10px", color: "#fff", marginBottom: "4px", paddingLeft: "8px", borderLeft: "2px solid rgba(255,255,255,0.4)" }}>{s}</p>)}
          </div>
        )}
        {languages.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "16px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>Languages</p>
            {languages.map((l, i) => <p key={i} style={{ fontSize: "10px", color: "#fff", marginBottom: "4px" }}>{l.name} – {l.level}</p>)}
          </div>
        )}
      </div>
      <div style={{ flex: 1, padding: "36px 28px" }}>
        {summary && <div style={{ marginBottom: "22px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#555" }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "12px" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#f97316", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#f97316", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}