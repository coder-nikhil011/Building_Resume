import React from "react";

export default function ATSPro({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      <div style={{ borderLeft: "5px solid #1d4ed8", paddingLeft: "16px", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#1e3a8a", margin: 0, textTransform: "uppercase" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#1d4ed8", fontWeight: "600", margin: "4px 0 0" }}>{personal.jobTitle}</p>}
      </div>
      <div style={{ background: "#eff6ff", borderRadius: "6px", padding: "10px 16px", marginBottom: "20px", fontSize: "11px", color: "#1e40af", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {personal.email && <span>✉ {personal.email}</span>}
        {personal.phone && <span>📞 {personal.phone}</span>}
        {personal.city && <span>📍 {personal.city}{personal.country ? `, ${personal.country}` : ""}</span>}
      </div>
      {summary && (
        <div style={{ marginBottom: "18px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", margin: "0 0 8px" }}>Professional Summary</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151", margin: 0 }}>{summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: "18px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 12px" }}>Work Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#1e3a8a" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#6b7280", background: "#eff6ff", padding: "1px 8px", borderRadius: "4px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#1d4ed8", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "18px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong style={{ fontSize: "12px", color: "#1e3a8a" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#1d4ed8", margin: "2px 0" }}>{edu.school}</p>
              </div>
              <span style={{ fontSize: "11px", color: "#6b7280" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div style={{ marginBottom: "18px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", padding: "3px 12px", borderRadius: "4px", fontWeight: "500" }}>{s}</span>)}
          </div>
        </div>
      )}
      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {languages.map((l, i) => <span key={i} style={{ fontSize: "12px", color: "#374151" }}>{l.name} <span style={{ color: "#6b7280" }}>({l.level})</span></span>)}
          </div>
        </div>
      )}
    </div>
  );
}