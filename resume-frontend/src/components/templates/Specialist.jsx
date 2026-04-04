import React from "react";

export default function Specialist({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#065f46", color: "#fff", padding: "36px 48px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6ee7b7", marginTop: "4px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", color: "#a7f3d0" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ padding: "32px 48px" }}>
        {summary && <div style={{ marginBottom: "22px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151" }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#065f46", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #6ee7b7", paddingBottom: "6px", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px", paddingLeft: "12px", borderLeft: "3px solid #d1fae5" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#064e3b" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", background: "#d1fae5", color: "#065f46", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#059669", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#065f46", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #6ee7b7", paddingBottom: "6px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#059669", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#065f46", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #6ee7b7", paddingBottom: "6px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#d1fae5", color: "#065f46", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}