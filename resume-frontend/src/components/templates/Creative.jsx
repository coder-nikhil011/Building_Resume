import React from "react";

export default function Creative({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)", padding: "40px 48px", color: "#fff" }}>
        <h1 style={{ fontSize: "34px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#e9d5ff", marginTop: "6px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "14px", fontSize: "11px", color: "#ddd6fe", flexWrap: "wrap" }}>
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.city && <span>📍 {personal.city}</span>}
        </div>
      </div>

      <div style={{ padding: "36px 48px" }}>
        {summary && (
          <div style={{ marginBottom: "28px", background: "#faf5ff", borderLeft: "4px solid #7c3aed", padding: "16px 20px", borderRadius: "0 8px 8px 0" }}>
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#7c3aed", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "inline-block", width: "28px", height: "3px", background: "#7c3aed", borderRadius: "2px" }} />
              Experience
            </h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "18px", padding: "16px", border: "1px solid #ede9fe", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <strong style={{ fontSize: "14px", color: "#1f2937" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", background: "#ede9fe", color: "#7c3aed", padding: "3px 10px", borderRadius: "20px", fontWeight: "600" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#7c3aed", fontWeight: "700", margin: "4px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "6px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {education.length > 0 && (
            <div>
              <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#7c3aed", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "inline-block", width: "28px", height: "3px", background: "#7c3aed", borderRadius: "2px" }} />
                Education
              </h2>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: "12px", padding: "12px", background: "#faf5ff", borderRadius: "8px" }}>
                  <strong style={{ fontSize: "12px", color: "#1f2937" }}>{edu.degree}</strong>
                  <p style={{ fontSize: "11px", color: "#7c3aed", margin: "2px 0" }}>{edu.school}</p>
                  <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          )}
          {skills.length > 0 && (
            <div>
              <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#7c3aed", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "inline-block", width: "28px", height: "3px", background: "#7c3aed", borderRadius: "2px" }} />
                Skills
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skills.map((s, i) => (
                  <span key={i} style={{ fontSize: "11px", background: "linear-gradient(135deg, #7c3aed, #a855f7)", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}