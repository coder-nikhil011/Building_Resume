import React from "react";

export default function Fresher({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], courses = [], activities = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", padding: "36px 48px", color: "#fff" }}>
        <h1 style={{ fontSize: "30px", fontWeight: "800", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#c7d2fe", marginTop: "4px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "11px", color: "#e0e7ff", flexWrap: "wrap" }}>
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.city && <span>📍 {personal.city}{personal.country ? `, ${personal.country}` : ""}</span>}
        </div>
      </div>
      <div style={{ padding: "32px 48px" }}>
        {summary && (
          <div style={{ marginBottom: "24px", background: "#f5f3ff", borderRadius: "10px", padding: "16px 20px", borderLeft: "4px solid #4f46e5" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 8px" }}>Career Objective</h2>
            <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p>
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #e0e7ff", paddingBottom: "6px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "14px", padding: "14px 16px", border: "1px solid #e0e7ff", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#1e1b4b" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "10px", background: "#ede9fe", color: "#4f46e5", padding: "2px 8px", borderRadius: "12px" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#4f46e5", margin: "3px 0", fontWeight: "600" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #e0e7ff", paddingBottom: "6px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#ede9fe", color: "#4f46e5", padding: "5px 14px", borderRadius: "20px", fontWeight: "600" }}>{s}</span>)}
            </div>
          </div>
        )}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #e0e7ff", paddingBottom: "6px", marginBottom: "14px" }}>Experience / Internships</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px", paddingLeft: "12px", borderLeft: "3px solid #c7d2fe" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#4f46e5", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {courses.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #e0e7ff", paddingBottom: "6px", marginBottom: "12px" }}>Courses</h2>
            {courses.map((c, i) => (
              <div key={i} style={{ marginBottom: "8px" }}>
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#1e1b4b", margin: 0 }}>{c.name}</p>
                {c.institution && <p style={{ fontSize: "11px", color: "#6b7280", margin: "1px 0" }}>{c.institution}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}