import React from "react";

export default function TwoColumn({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#4338ca", color: "#fff", padding: "32px 48px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "700", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#c7d2fe", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "8px", fontSize: "11px", color: "#a5b4fc" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 220px" }}>
        <div style={{ padding: "28px 32px", borderRight: "1px solid #e5e7eb" }}>
          {summary && <div style={{ marginBottom: "20px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#555" }}>{summary}</p></div>}
          {experience.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Experience</h2>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ fontSize: "12px" }}>{exp.position}</strong>
                    <span style={{ fontSize: "10px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#4338ca", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                  {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
                </div>
              ))}
            </div>
          )}
          {education.length > 0 && (
            <div>
              <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Education</h2>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                    <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#4338ca", margin: "2px 0" }}>{edu.school}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: "28px 20px", background: "#f5f3ff" }}>
          {skills.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Skills</h2>
              {skills.map((s, i) => (
                <div key={i} style={{ marginBottom: "8px" }}>
                  <p style={{ fontSize: "11px", color: "#374151", marginBottom: "3px" }}>{s}</p>
                  <div style={{ height: "3px", background: "#ddd6fe", borderRadius: "2px" }}>
                    <div style={{ height: "3px", background: "#4338ca", borderRadius: "2px", width: `${65 + (i * 11) % 30}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Languages</h2>
              {languages.map((l, i) => <p key={i} style={{ fontSize: "11px", color: "#374151", marginBottom: "6px" }}>{l.name} <span style={{ color: "#818cf8" }}>– {l.level}</span></p>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}