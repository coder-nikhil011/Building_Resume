import React from "react";

export default function Classic({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [], links = [], hobbies = "" } = resume;

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#fff", color: "#1a1a1a", padding: "48px", minHeight: "1123px", width: "794px", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: "16px", marginBottom: "24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#555", marginTop: "4px", letterSpacing: "0.5px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "12px", color: "#555", marginTop: "6px" }}>
          {[personal.email, personal.phone, personal.city && `${personal.city}${personal.country ? ", " + personal.country : ""}`].filter(Boolean).join("  •  ")}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "1px solid #ccc", paddingBottom: "4px", marginBottom: "8px" }}>Profile</h2>
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#333" }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "1px solid #ccc", paddingBottom: "4px", marginBottom: "12px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <strong style={{ fontSize: "13px" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#777" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#555", margin: "2px 0" }}>{exp.company}{exp.city ? `, ${exp.city}` : ""}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#444", marginTop: "4px", lineHeight: "1.6" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "1px solid #ccc", paddingBottom: "4px", marginBottom: "12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <span style={{ fontSize: "11px", color: "#777" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#555", margin: "2px 0" }}>{edu.school}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "1px solid #ccc", paddingBottom: "4px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => (
              <span key={i} style={{ fontSize: "11px", border: "1px solid #bbb", padding: "3px 10px", borderRadius: "2px", color: "#333" }}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "1px solid #ccc", paddingBottom: "4px", marginBottom: "10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {languages.map((l, i) => (
              <span key={i} style={{ fontSize: "12px", color: "#333" }}>{l.name} <span style={{ color: "#888" }}>— {l.level}</span></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}