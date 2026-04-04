import React from "react";

export default function Corporate({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#1e3a5f", color: "#fff", padding: "36px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "26px", fontWeight: "700", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
          {personal.jobTitle && <p style={{ fontSize: "12px", color: "#93c5fd", marginTop: "4px" }}>{personal.jobTitle}</p>}
        </div>
        <div style={{ textAlign: "right", fontSize: "11px", color: "#bfdbfe", lineHeight: "1.8" }}>
          {personal.email && <p style={{ margin: 0 }}>{personal.email}</p>}
          {personal.phone && <p style={{ margin: 0 }}>{personal.phone}</p>}
          {personal.city && <p style={{ margin: 0 }}>{personal.city}</p>}
        </div>
      </div>
      <div style={{ padding: "36px 48px" }}>
        {summary && <div style={{ marginBottom: "22px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151", borderLeft: "4px solid #1e3a5f", paddingLeft: "14px" }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#1e3a5f", borderBottom: "2px solid #1e3a5f", paddingBottom: "6px", marginBottom: "12px" }}>Work Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#1e3a5f" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", color: "#6b7280", background: "#eff6ff", padding: "2px 8px", borderRadius: "4px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#4b7bb5", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#555", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#1e3a5f", borderBottom: "2px solid #1e3a5f", paddingBottom: "6px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                <div>
                  <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                  <p style={{ fontSize: "11px", color: "#4b7bb5", margin: "2px 0" }}>{edu.school}</p>
                </div>
                <span style={{ fontSize: "10px", color: "#6b7280" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#1e3a5f", borderBottom: "2px solid #1e3a5f", paddingBottom: "6px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
              {skills.map((s, i) => <div key={i} style={{ fontSize: "11px", color: "#1e3a5f", padding: "5px 10px", background: "#eff6ff", borderRadius: "4px", textAlign: "center" }}>{s}</div>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}