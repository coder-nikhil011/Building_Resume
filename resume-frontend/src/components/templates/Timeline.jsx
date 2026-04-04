import React from "react";

export default function Timeline({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ borderBottom: "3px solid #0ea5e9", paddingBottom: "20px", marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#0c4a6e", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#0ea5e9", fontWeight: "600", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "6px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join("  ·  ")}</p>
      </div>
      {summary && <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#374151", marginBottom: "28px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "20px" }}>Experience</h2>
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, width: "2px", background: "#e0f2fe" }} />
            {experience.map((exp, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "20px" }}>
                <div style={{ position: "absolute", left: "-25px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "#0ea5e9", border: "2px solid #fff", boxShadow: "0 0 0 2px #0ea5e9" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#0c4a6e" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", color: "#0ea5e9", background: "#e0f2fe", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#0ea5e9", margin: "2px 0", fontWeight: "500" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>Education</h2>
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, width: "2px", background: "#e0f2fe" }} />
            {education.map((edu, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "14px" }}>
                <div style={{ position: "absolute", left: "-25px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "#7dd3fc", border: "2px solid #fff", boxShadow: "0 0 0 2px #7dd3fc" }} />
                <strong style={{ fontSize: "13px", color: "#0c4a6e" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#0ea5e9", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#e0f2fe", color: "#0369a1", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}