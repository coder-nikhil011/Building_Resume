import React from "react";

export default function Gradient({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(160deg, #f0f4ff 0%, #fdf4ff 100%)", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ display: "inline-block", padding: "3px", borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #a855f7)", marginBottom: "12px" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", fontWeight: "700", color: "#4f46e5" }}>{(personal.firstName || "Y").charAt(0)}</div>
        </div>
        <h1 style={{ fontSize: "26px", fontWeight: "700", background: "linear-gradient(135deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#6366f1", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "6px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join("  ·  ")}</p>
      </div>
      {summary && (
        <div style={{ marginBottom: "24px", background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "16px 20px" }}>
          <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "14px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px", background: "rgba(255,255,255,0.7)", borderRadius: "10px", padding: "14px 18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#312e81" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#e0e7ff", color: "#4f46e5", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "11px", color: "#6366f1", margin: "3px 0", fontWeight: "600" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#a855f7", marginBottom: "14px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.7)", borderRadius: "10px", padding: "12px 16px", marginBottom: "10px" }}>
              <strong style={{ fontSize: "12px", color: "#312e81" }}>{edu.degree}</strong>
              <p style={{ fontSize: "11px", color: "#a855f7", margin: "2px 0" }}>{edu.school}</p>
              <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "#fff", padding: "4px 12px", borderRadius: "20px" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}