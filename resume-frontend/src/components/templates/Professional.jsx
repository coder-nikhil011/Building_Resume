import React from "react";

export default function Professional({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      {/* Sidebar */}
      <div style={{ width: "260px", background: "#1e293b", color: "#fff", padding: "40px 24px", flexShrink: 0 }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#334155", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: "700", color: "#94a3b8" }}>
          {(personal.firstName || "Y").charAt(0)}
        </div>
        <h1 style={{ fontSize: "18px", fontWeight: "700", textAlign: "center", margin: "0 0 4px" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "11px", color: "#94a3b8", textAlign: "center", marginBottom: "24px" }}>{personal.jobTitle}</p>}

        <div style={{ borderTop: "1px solid #334155", paddingTop: "20px", marginBottom: "20px" }}>
          <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#64748b", marginBottom: "10px" }}>Contact</p>
          {personal.email && <p style={{ fontSize: "11px", color: "#cbd5e1", marginBottom: "6px", wordBreak: "break-all" }}>✉ {personal.email}</p>}
          {personal.phone && <p style={{ fontSize: "11px", color: "#cbd5e1", marginBottom: "6px" }}>📞 {personal.phone}</p>}
          {personal.city && <p style={{ fontSize: "11px", color: "#cbd5e1", marginBottom: "6px" }}>📍 {personal.city}, {personal.country}</p>}
        </div>

        {skills.length > 0 && (
          <div style={{ borderTop: "1px solid #334155", paddingTop: "20px", marginBottom: "20px" }}>
            <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#64748b", marginBottom: "10px" }}>Skills</p>
            {skills.map((s, i) => (
              <div key={i} style={{ marginBottom: "8px" }}>
                <p style={{ fontSize: "11px", color: "#e2e8f0", marginBottom: "3px" }}>{s}</p>
                <div style={{ height: "3px", background: "#334155", borderRadius: "2px" }}>
                  <div style={{ height: "3px", background: "#3b82f6", borderRadius: "2px", width: "75%" }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {languages.length > 0 && (
          <div style={{ borderTop: "1px solid #334155", paddingTop: "20px" }}>
            <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#64748b", marginBottom: "10px" }}>Languages</p>
            {languages.map((l, i) => (
              <p key={i} style={{ fontSize: "11px", color: "#cbd5e1", marginBottom: "4px" }}>{l.name} <span style={{ color: "#64748b" }}>– {l.level}</span></p>
            ))}
          </div>
        )}
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "40px 32px" }}>
        {summary && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#1e293b", borderBottom: "2px solid #1e293b", paddingBottom: "6px", marginBottom: "10px" }}>Profile</h2>
            <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#475569" }}>{summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#1e293b", borderBottom: "2px solid #1e293b", paddingBottom: "6px", marginBottom: "12px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#0f172a" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", color: "#94a3b8" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#3b82f6", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#475569", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#1e293b", borderBottom: "2px solid #1e293b", paddingBottom: "6px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "11px", color: "#94a3b8" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#3b82f6", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}