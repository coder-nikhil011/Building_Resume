import React from "react";

export default function Designer({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "8px", background: "linear-gradient(180deg, #6366f1, #8b5cf6, #a855f7)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ padding: "40px 40px 28px", borderBottom: "1px solid #f3f4f6" }}>
            <h1 style={{ fontSize: "30px", fontWeight: "800", margin: 0, color: "#111" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
            {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6366f1", fontWeight: "600", marginTop: "6px" }}>{personal.jobTitle}</p>}
            <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", color: "#9ca3af" }}>
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.city && <span>{personal.city}</span>}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 240px" }}>
            <div style={{ padding: "28px 40px", borderRight: "1px solid #f3f4f6" }}>
              {summary && <div style={{ marginBottom: "24px" }}><p style={{ fontSize: "12px", lineHeight: "1.8", color: "#555" }}>{summary}</p></div>}
              {experience.length > 0 && (
                <div style={{ marginBottom: "24px" }}>
                  <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "14px" }}>Experience</h2>
                  {experience.map((exp, i) => (
                    <div key={i} style={{ marginBottom: "16px" }}>
                      <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontSize: "11px", color: "#6366f1", margin: "2px 0", fontWeight: "600" }}>{exp.company}</p>
                        <span style={{ fontSize: "10px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                      </div>
                      {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6" }}>{exp.description}</p>}
                    </div>
                  ))}
                </div>
              )}
              {education.length > 0 && (
                <div>
                  <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "12px" }}>Education</h2>
                  {education.map((edu, i) => (
                    <div key={i} style={{ marginBottom: "10px" }}>
                      <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                      <p style={{ fontSize: "11px", color: "#6366f1", margin: "2px 0" }}>{edu.school}</p>
                      <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{ padding: "28px 24px" }}>
              {skills.length > 0 && (
                <div>
                  <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "14px" }}>Skills</h2>
                  {skills.map((s, i) => (
                    <div key={i} style={{ marginBottom: "10px" }}>
                      <p style={{ fontSize: "11px", color: "#374151", marginBottom: "4px" }}>{s}</p>
                      <div style={{ height: "4px", background: "#f3f4f6", borderRadius: "2px" }}>
                        <div style={{ height: "4px", borderRadius: "2px", background: "linear-gradient(90deg, #6366f1, #a855f7)", width: `${60 + (i * 13) % 35}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}