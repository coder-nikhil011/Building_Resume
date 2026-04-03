import React from "react";

export default function Stylish({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#be185d", color: "#fff", padding: "40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-30px", top: "-30px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", right: "40px", bottom: "-40px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <h1 style={{ fontSize: "30px", fontWeight: "800", margin: 0, position: "relative" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#fce7f3", marginTop: "6px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "11px", color: "#fbcfe8" }}>
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.city && <span>📍 {personal.city}</span>}
        </div>
      </div>
      <div style={{ padding: "36px 48px" }}>
        {summary && <div style={{ marginBottom: "24px", padding: "16px 20px", background: "#fdf2f8", borderRadius: "8px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#be185d", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px", paddingLeft: "14px", borderLeft: "3px solid #fbcfe8" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", background: "#fdf2f8", color: "#be185d", padding: "2px 8px", borderRadius: "12px", fontWeight: "600" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#be185d", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#be185d", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px", paddingLeft: "14px", borderLeft: "3px solid #fbcfe8" }}>
                <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#be185d", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#be185d", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#fdf2f8", color: "#be185d", border: "1px solid #fbcfe8", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}