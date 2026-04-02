import React from "react";

export default function PrimeATS({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111", margin: "0 0 4px", textTransform: "uppercase" }}>
        {personal.firstName || "Your"} {personal.lastName || "Name"}
      </h1>
      {personal.jobTitle && <p style={{ fontSize: "13px", color: "#ea580c", margin: "0 0 8px", fontWeight: "600" }}>{personal.jobTitle}</p>}
      <p style={{ fontSize: "11px", color: "#374151", margin: "0 0 16px", borderBottom: "2px solid #ea580c", paddingBottom: "12px" }}>
        {[personal.email, personal.phone, personal.city && `${personal.city}${personal.country ? ", " + personal.country : ""}`].filter(Boolean).join("  |  ")}
      </p>
      {summary && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#ea580c", margin: "0 0 6px", letterSpacing: "0.5px" }}>Professional Summary</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.6", color: "#374151", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#ea580c", borderTop: "1px solid #fed7aa", paddingTop: "10px", margin: "0 0 10px", letterSpacing: "0.5px" }}>Work Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#111" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#374151" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#ea580c", fontWeight: "600", margin: "1px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#ea580c", borderTop: "1px solid #fed7aa", paddingTop: "10px", margin: "0 0 10px", letterSpacing: "0.5px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#111" }}>{edu.degree}</strong>
                <span style={{ fontSize: "11px", color: "#374151" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#374151", margin: "1px 0" }}>{edu.school}</p>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#ea580c", borderTop: "1px solid #fed7aa", paddingTop: "10px", margin: "0 0 8px", letterSpacing: "0.5px" }}>Skills</h2>
          <p style={{ fontSize: "12px", color: "#374151", margin: 0 }}>{skills.join(" · ")}</p>
        </div>
      )}
      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#ea580c", borderTop: "1px solid #fed7aa", paddingTop: "10px", margin: "0 0 8px", letterSpacing: "0.5px" }}>Languages</h2>
          <p style={{ fontSize: "12px", color: "#374151", margin: 0 }}>{languages.map(l => `${l.name} (${l.level})`).join("  ·  ")}</p>
        </div>
      )}
    </div>
  );
}