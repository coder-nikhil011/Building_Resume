import React from "react";

export default function Startup({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ padding: "40px 48px 28px", borderBottom: "3px solid #f59e0b" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: "34px", fontWeight: "900", margin: 0, color: "#111", lineHeight: 1.1 }}>
              {personal.firstName || "Your"}<br />
              <span style={{ color: "#f59e0b" }}>{personal.lastName || "Name"}</span>
            </h1>
            {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "8px", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>{personal.jobTitle}</p>}
          </div>
          <div style={{ textAlign: "right", fontSize: "11px", color: "#6b7280", lineHeight: "2" }}>
            {personal.email && <p style={{ margin: 0 }}>{personal.email}</p>}
            {personal.phone && <p style={{ margin: 0 }}>{personal.phone}</p>}
            {personal.city && <p style={{ margin: 0 }}>{personal.city}</p>}
          </div>
        </div>
      </div>
      <div style={{ padding: "28px 48px" }}>
        {summary && <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151", marginBottom: "28px" }}>{summary}</p>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ background: "#f59e0b", color: "#fff", fontSize: "10px", fontWeight: "700", padding: "3px 10px", textTransform: "uppercase", letterSpacing: "1px" }}>Experience</span>
              <div style={{ flex: 1, height: "1px", background: "#fde68a" }} />
            </div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "18px", display: "flex", gap: "16px" }}>
                <div style={{ width: "4px", background: "#fde68a", borderRadius: "2px", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ fontSize: "14px", color: "#111" }}>{exp.position}</strong>
                    <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", margin: "2px 0" }}>{exp.company}</p>
                  {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ background: "#111", color: "#fff", fontSize: "10px", fontWeight: "700", padding: "3px 10px", textTransform: "uppercase", letterSpacing: "1px" }}>Education</span>
              <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
            </div>
            {education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <div>
                  <strong style={{ fontSize: "13px", color: "#111" }}>{edu.degree}</strong>
                  <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{edu.school}</p>
                </div>
                <span style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <span style={{ background: "#f59e0b", color: "#fff", fontSize: "10px", fontWeight: "700", padding: "3px 10px", textTransform: "uppercase", letterSpacing: "1px" }}>Skills</span>
              <div style={{ flex: 1, height: "1px", background: "#fde68a" }} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", border: "2px solid #111", color: "#111", padding: "4px 14px", fontWeight: "700" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}