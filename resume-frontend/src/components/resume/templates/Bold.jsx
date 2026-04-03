import React from "react";

export default function Bold({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial Black, Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#000", color: "#fff", padding: "40px 48px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "900", margin: 0, textTransform: "uppercase", letterSpacing: "-1px", lineHeight: 1.1 }}>
          {personal.firstName || "Your"}<br />{personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <div style={{ display: "inline-block", background: "#facc15", color: "#000", padding: "4px 14px", marginTop: "10px", fontWeight: "700", fontSize: "12px", textTransform: "uppercase" }}>{personal.jobTitle}</div>}
      </div>
      <div style={{ background: "#f5f5f5", padding: "12px 48px", display: "flex", gap: "24px", fontSize: "11px", color: "#555", borderBottom: "4px solid #facc15" }}>
        {personal.email && <span>✉ {personal.email}</span>}
        {personal.phone && <span>📞 {personal.phone}</span>}
        {personal.city && <span>📍 {personal.city}</span>}
      </div>
      <div style={{ padding: "36px 48px" }}>
        {summary && (
          <div style={{ marginBottom: "24px", borderLeft: "6px solid #facc15", paddingLeft: "16px" }}>
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#333", margin: 0 }}>{summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#000", background: "#facc15", padding: "4px 12px", display: "inline-block", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "16px", paddingLeft: "12px", borderLeft: "4px solid #000" }}>
                <strong style={{ fontSize: "14px", color: "#000", textTransform: "uppercase" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#555", margin: "2px 0" }}>{exp.company} · {exp.startDate} – {exp.endDate || "Present"}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#444", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#000", background: "#facc15", padding: "4px 12px", display: "inline-block", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px", paddingLeft: "12px", borderLeft: "4px solid #000" }}>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#555", margin: "2px 0" }}>{edu.school} · {edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#000", background: "#facc15", padding: "4px 12px", display: "inline-block", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#000", color: "#fff", padding: "5px 14px", fontWeight: "700", textTransform: "uppercase" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}