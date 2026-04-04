import React from "react";

export default function Light({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fafafa", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#f0fdf4", padding: "40px 48px", borderBottom: "1px solid #dcfce7" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#14532d", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#16a34a", marginTop: "5px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", flexWrap: "wrap" }}>
          {personal.email && <span style={{ color: "#15803d" }}>✉ {personal.email}</span>}
          {personal.phone && <span style={{ color: "#15803d" }}>📞 {personal.phone}</span>}
          {personal.city && <span style={{ color: "#15803d" }}>📍 {personal.city}</span>}
        </div>
      </div>
      <div style={{ padding: "32px 48px" }}>
        {summary && <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151", marginBottom: "24px" }}>{summary}</p>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#16a34a", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px", padding: "14px 16px", background: "#fff", borderRadius: "8px", border: "1px solid #dcfce7" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#14532d" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", background: "#dcfce7", color: "#16a34a", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#16a34a", fontWeight: "600", margin: "3px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#16a34a", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "12px", padding: "12px 16px", background: "#fff", borderRadius: "8px", border: "1px solid #dcfce7" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#14532d" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#16a34a", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#16a34a", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#dcfce7", color: "#15803d", padding: "4px 14px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}