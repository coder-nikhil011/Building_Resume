import React from "react";

export default function Managerial({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#374151", padding: "36px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#fff", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
          {personal.jobTitle && <p style={{ fontSize: "12px", color: "#d1d5db", marginTop: "4px" }}>{personal.jobTitle}</p>}
        </div>
        <div style={{ textAlign: "right", fontSize: "10px", color: "#9ca3af", lineHeight: "1.9" }}>
          {personal.email && <p style={{ margin: 0 }}>{personal.email}</p>}
          {personal.phone && <p style={{ margin: 0 }}>{personal.phone}</p>}
          {personal.city && <p style={{ margin: 0 }}>{personal.city}</p>}
        </div>
      </div>
      <div style={{ height: "4px", background: "#6b7280" }} />
      <div style={{ padding: "32px 48px" }}>
        {summary && <div style={{ marginBottom: "22px", padding: "14px 18px", background: "#f9fafb", borderLeft: "4px solid #374151" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151", margin: 0 }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#374151", margin: 0 }}>Professional Experience</h2>
              <div style={{ flex: 1, height: "1px", background: "#d1d5db" }} />
            </div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", color: "#6b7280", border: "1px solid #d1d5db", padding: "1px 8px", borderRadius: "4px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#374151", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#374151", margin: 0 }}>Education</h2>
              <div style={{ flex: 1, height: "1px", background: "#d1d5db" }} />
            </div>
            {education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <div>
                  <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                  <p style={{ fontSize: "11px", color: "#6b7280", margin: "2px 0" }}>{edu.school}</p>
                </div>
                <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#374151", margin: 0 }}>Skills</h2>
              <div style={{ flex: 1, height: "1px", background: "#d1d5db" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
              {skills.map((s, i) => <div key={i} style={{ fontSize: "11px", color: "#374151", padding: "5px 10px", border: "1px solid #d1d5db", textAlign: "center", borderRadius: "4px" }}>{s}</div>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}