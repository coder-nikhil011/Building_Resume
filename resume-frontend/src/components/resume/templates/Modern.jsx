import React from "react";

export default function Modern({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#fff", color: "#222", width: "794px", minHeight: "1123px", boxSizing: "border-box", borderTop: "6px solid #2563eb" }}>
      {/* Header */}
      <div style={{ background: "#1e40af", color: "#fff", padding: "32px 48px" }}>
        <h1 style={{ fontSize: "30px", fontWeight: "800", margin: 0 }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#93c5fd", marginTop: "4px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "12px", color: "#bfdbfe", flexWrap: "wrap" }}>
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.city && <span>📍 {personal.city}{personal.country ? `, ${personal.country}` : ""}</span>}
        </div>
      </div>

      <div style={{ padding: "32px 48px" }}>
        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>About Me</h2>
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#444" }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Work Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "16px", paddingLeft: "12px", borderLeft: "3px solid #dbeafe" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#1e3a8a" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", color: "#6b7280", background: "#eff6ff", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#2563eb", margin: "3px 0", fontWeight: "600" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#555", marginTop: "4px", lineHeight: "1.6" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "12px", paddingLeft: "12px", borderLeft: "3px solid #dbeafe" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "11px", color: "#6b7280" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#2563eb", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#2563eb", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((s, i) => (
                <span key={i} style={{ fontSize: "11px", background: "#dbeafe", color: "#1e40af", padding: "4px 12px", borderRadius: "20px", fontWeight: "600" }}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}