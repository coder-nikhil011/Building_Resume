import React from "react";

export default function Academic({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], courses = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "52px 56px" }}>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#374151", marginTop: "4px", fontStyle: "italic" }}>{personal.jobTitle}</p>}
        <div style={{ height: "1px", background: "#374151", margin: "12px auto", width: "60px" }} />
        <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.8" }}>
          {[personal.email, personal.phone, personal.city && `${personal.city}${personal.country ? ", " + personal.country : ""}`].filter(Boolean).join("  |  ")}
        </p>
      </div>
      {summary && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "10px" }}>Profile</h2>
          <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151", textAlign: "justify" }}>{summary}</p>
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
              <div style={{ width: "100px", flexShrink: 0 }}>
                <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{edu.startDate} – {edu.endDate}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#111" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#374151", fontStyle: "italic", margin: "2px 0" }}>{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "12px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
              <div style={{ width: "100px", flexShrink: 0 }}>
                <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{exp.startDate} – {exp.endDate || "Present"}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#374151", fontStyle: "italic", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.7", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "10px" }}>Skills</h2>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.8" }}>{skills.join("  ·  ")}</p>
        </div>
      )}
      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {languages.map((l, i) => <span key={i} style={{ fontSize: "12px", color: "#374151" }}>{l.name} <span style={{ color: "#6b7280", fontStyle: "italic" }}>({l.level})</span></span>)}
          </div>
        </div>
      )}
    </div>
  );
}