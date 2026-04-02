import React from "react";

// ─── FRESHER ─────────────────────────────────────────────
// Bright, friendly — perfect for fresh graduates
export function Fresher({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [], courses = [], activities = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      {/* Header */}
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
        {/* Objective/Summary */}
        {summary && (
          <div style={{ marginBottom: "24px", background: "#f5f3ff", borderRadius: "10px", padding: "16px 20px", borderLeft: "4px solid #4f46e5" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 8px" }}>Career Objective</h2>
            <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p>
          </div>
        )}

        {/* Education — featured for fresher */}
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
                {edu.description && <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "4px" }}>{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #e0e7ff", paddingBottom: "6px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((s, i) => (
                <span key={i} style={{ fontSize: "11px", background: "#ede9fe", color: "#4f46e5", padding: "5px 14px", borderRadius: "20px", fontWeight: "600" }}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Internships / Experience */}
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

        {/* Courses & Activities */}
        <div style={{ display: "grid", gridTemplateColumns: courses.length > 0 && activities.length > 0 ? "1fr 1fr" : "1fr", gap: "20px" }}>
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
          {activities.length > 0 && (
            <div>
              <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #e0e7ff", paddingBottom: "6px", marginBottom: "12px" }}>Activities</h2>
              {activities.map((a, i) => (
                <p key={i} style={{ fontSize: "12px", color: "#4b5563", marginBottom: "6px" }}>• {a.name || a}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── DARK ────────────────────────────────────────────────
// Full dark mode resume
export function Dark({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0f172a", color: "#e2e8f0", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      {/* Header */}
      <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "800", margin: 0, color: "#f8fafc" }}>
          {personal.firstName || "Your"} <span style={{ color: "#818cf8" }}>{personal.lastName || "Name"}</span>
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#818cf8", marginTop: "6px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", color: "#475569", flexWrap: "wrap" }}>
          {personal.email && <span style={{ color: "#64748b" }}>✉ {personal.email}</span>}
          {personal.phone && <span style={{ color: "#64748b" }}>📞 {personal.phone}</span>}
          {personal.city && <span style={{ color: "#64748b" }}>📍 {personal.city}</span>}
        </div>
      </div>

      {summary && (
        <div style={{ marginBottom: "28px", padding: "18px 20px", background: "#1e293b", borderRadius: "10px", borderLeft: "4px solid #818cf8" }}>
          <p style={{ fontSize: "12px", lineHeight: "1.8", color: "#94a3b8", margin: 0 }}>{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "16px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "18px", padding: "16px 18px", background: "#1e293b", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <strong style={{ fontSize: "13px", color: "#f1f5f9" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#0f172a", color: "#818cf8", padding: "3px 10px", borderRadius: "12px", border: "1px solid #312e81" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#818cf8", margin: "4px 0", fontWeight: "600" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.7", marginTop: "6px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "14px", padding: "14px", background: "#1e293b", borderRadius: "8px" }}>
                <strong style={{ fontSize: "12px", color: "#f1f5f9" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#818cf8", margin: "3px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "10px", color: "#475569" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        <div>
          {skills.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skills.map((s, i) => (
                  <span key={i} style={{ fontSize: "11px", background: "#1e293b", color: "#c7d2fe", border: "1px solid #312e81", padding: "4px 12px", borderRadius: "4px" }}>{s}</span>
                ))}
              </div>
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px" }}>Languages</h2>
              {languages.map((l, i) => (
                <p key={i} style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "6px" }}>{l.name} <span style={{ color: "#475569" }}>– {l.level}</span></p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── LIGHT ───────────────────────────────────────────────
// Soft pastel tones, very readable
export function Light({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fafafa", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      {/* Soft header */}
      <div style={{ background: "#f0fdf4", padding: "40px 48px", borderBottom: "1px solid #dcfce7" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#14532d", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#16a34a", marginTop: "5px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", color: "#4ade80", flexWrap: "wrap" }}>
          {personal.email && <span style={{ color: "#15803d" }}>✉ {personal.email}</span>}
          {personal.phone && <span style={{ color: "#15803d" }}>📞 {personal.phone}</span>}
          {personal.city && <span style={{ color: "#15803d" }}>📍 {personal.city}</span>}
        </div>
      </div>

      <div style={{ padding: "32px 48px" }}>
        {summary && (
          <div style={{ marginBottom: "24px" }}>
            <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151" }}>{summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#16a34a", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "16px", padding: "14px 16px", background: "#fff", borderRadius: "8px", border: "1px solid #dcfce7" }}>
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
              {skills.map((s, i) => (
                <span key={i} style={{ fontSize: "11px", background: "#dcfce7", color: "#15803d", padding: "4px 14px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── STARTUP ─────────────────────────────────────────────
// Bold, modern, startup-culture vibe
export function Startup({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      {/* Header */}
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
        {summary && (
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151" }}>{summary}</p>
          </div>
        )}

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
              {skills.map((s, i) => (
                <span key={i} style={{ fontSize: "11px", border: "2px solid #111", color: "#111", padding: "4px 14px", fontWeight: "700" }}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── TECH ────────────────────────────────────────────────
// Developer/engineer focused, monospace accents
export function Tech({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], links = [] } = resume;
  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      {/* Terminal-style header */}
      <div style={{ background: "#1e1e1e", borderRadius: "8px", padding: "24px 28px", marginBottom: "28px" }}>
        <p style={{ fontSize: "10px", color: "#6b7280", margin: "0 0 8px" }}>$ whoami</p>
        <h1 style={{ fontSize: "26px", fontWeight: "700", color: "#22c55e", margin: 0, fontFamily: "'Courier New', monospace" }}>
          {personal.firstName || "Your"}_{personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#64748b", marginTop: "4px", fontFamily: "'Courier New', monospace" }}>// {personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "10px", color: "#4b5563", flexWrap: "wrap" }}>
          {personal.email && <span style={{ color: "#6ee7b7" }}>{personal.email}</span>}
          {personal.phone && <span style={{ color: "#6ee7b7" }}>{personal.phone}</span>}
          {personal.city && <span style={{ color: "#6ee7b7" }}>{personal.city}</span>}
        </div>
      </div>

      {summary && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "6px", fontFamily: "'Courier New', monospace" }}>{"// about_me"}</p>
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#374151", fontFamily: "Arial, sans-serif" }}>{summary}</p>
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "10px" }}>{"const skills = ["}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingLeft: "16px" }}>
            {skills.map((s, i) => (
              <span key={i} style={{ fontSize: "11px", background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0", padding: "4px 12px", borderRadius: "4px", fontFamily: "'Courier New', monospace" }}>"{s}"</span>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "#22c55e", marginTop: "8px" }}>{"];"}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "12px" }}>{"// work_experience"}</p>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", borderLeft: "3px solid #22c55e", paddingLeft: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#111", fontFamily: "Arial, sans-serif" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#f0fdf4", color: "#15803d", padding: "2px 8px", borderRadius: "4px", border: "1px solid #bbf7d0" }}>{exp.startDate} → {exp.endDate || "now"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#22c55e", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px", fontFamily: "Arial, sans-serif" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div>
          <p style={{ fontSize: "11px", color: "#22c55e", marginBottom: "12px" }}>{"// education"}</p>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "12px", borderLeft: "3px solid #bbf7d0", paddingLeft: "14px" }}>
              <strong style={{ fontSize: "13px", color: "#111", fontFamily: "Arial, sans-serif" }}>{edu.degree}</strong>
              <p style={{ fontSize: "12px", color: "#22c55e", margin: "2px 0" }}>{edu.school}</p>
              <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ACADEMIC ────────────────────────────────────────────
// Research/academic style — formal, detailed
export function Academic({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], courses = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "52px 56px" }}>
      {/* Header — centered academic style */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111", margin: 0, letterSpacing: "0.5px" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#374151", marginTop: "4px", fontStyle: "italic" }}>{personal.jobTitle}</p>}
        <div style={{ height: "1px", background: "#374151", margin: "12px auto", width: "60px" }} />
        <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.8" }}>
          {[personal.email, personal.phone, personal.city && `${personal.city}${personal.country ? ", " + personal.country : ""}`].filter(Boolean).join("  |  ")}
        </p>
      </div>

      {summary && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "10px" }}>Research Interests / Profile</h2>
          <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#374151", textAlign: "justify" }}>{summary}</p>
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
              <div style={{ width: "100px", flexShrink: 0, paddingTop: "2px" }}>
                <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{edu.startDate} – {edu.endDate}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#111" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#374151", fontStyle: "italic", margin: "2px 0" }}>{edu.school}</p>
                {edu.description && <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "12px" }}>Academic & Professional Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
              <div style={{ width: "100px", flexShrink: 0, paddingTop: "2px" }}>
                <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{exp.startDate} – {exp.endDate || "Present"}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#374151", fontStyle: "italic", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.7", marginTop: "4px", textAlign: "justify" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {courses.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "12px" }}>Courses & Certifications</h2>
          {courses.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
              <div style={{ width: "100px", flexShrink: 0 }}>
                {c.year && <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{c.year}</p>}
              </div>
              <div>
                <strong style={{ fontSize: "12px", color: "#111" }}>{c.name}</strong>
                {c.institution && <span style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic" }}> — {c.institution}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "10px" }}>Skills & Competencies</h2>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.8" }}>{skills.join("  ·  ")}</p>
        </div>
      )}

      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#111", borderBottom: "1px solid #111", paddingBottom: "4px", marginBottom: "10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {languages.map((l, i) => (
              <span key={i} style={{ fontSize: "12px", color: "#374151" }}>{l.name} <span style={{ color: "#6b7280", fontStyle: "italic" }}>({l.level})</span></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PRIME ATS ───────────────────────────────────────────
// ATS optimized, clean structure, no fancy styling
export function PrimeATS({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
        {personal.firstName || "Your"} {personal.lastName || "Name"}
      </h1>
      {personal.jobTitle && <p style={{ fontSize: "13px", color: "#374151", margin: "0 0 8px" }}>{personal.jobTitle}</p>}
      <p style={{ fontSize: "11px", color: "#374151", margin: "0 0 16px", borderBottom: "1px solid #374151", paddingBottom: "12px" }}>
        {[personal.email, personal.phone, personal.city && `${personal.city}${personal.country ? ", " + personal.country : ""}`].filter(Boolean).join("  |  ")}
      </p>

      {summary && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#111", margin: "0 0 6px", letterSpacing: "0.5px" }}>PROFESSIONAL SUMMARY</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.6", color: "#374151", margin: 0 }}>{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#111", borderTop: "1px solid #e5e7eb", paddingTop: "10px", margin: "0 0 10px", letterSpacing: "0.5px" }}>WORK EXPERIENCE</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#111" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#374151" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#374151", fontWeight: "600", margin: "1px 0" }}>{exp.company}{exp.city ? ` | ${exp.city}` : ""}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#111", borderTop: "1px solid #e5e7eb", paddingTop: "10px", margin: "0 0 10px", letterSpacing: "0.5px" }}>EDUCATION</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#111" }}>{edu.degree}</strong>
                <span style={{ fontSize: "11px", color: "#374151" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#374151", margin: "1px 0" }}>{edu.school}</p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#111", borderTop: "1px solid #e5e7eb", paddingTop: "10px", margin: "0 0 8px", letterSpacing: "0.5px" }}>SKILLS</h2>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.6", margin: 0 }}>{skills.join(" · ")}</p>
        </div>
      )}

      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "#111", borderTop: "1px solid #e5e7eb", paddingTop: "10px", margin: "0 0 8px", letterSpacing: "0.5px" }}>LANGUAGES</h2>
          <p style={{ fontSize: "12px", color: "#374151", margin: 0 }}>{languages.map(l => `${l.name} (${l.level})`).join("  ·  ")}</p>
        </div>
      )}
    </div>
  );
}

// ─── ATS BASIC ───────────────────────────────────────────
// Ultra simple ATS — plain black/white, maximum parsability
export function ATSBasic({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "36px 44px" }}>
      <div style={{ borderBottom: "2px solid #000", paddingBottom: "12px", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#000", margin: "0 0 4px", textTransform: "uppercase" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#333", margin: "0 0 6px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#333", margin: 0 }}>
          {[personal.email, personal.phone, personal.city].filter(Boolean).join(" | ")}
        </p>
      </div>

      {summary && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", margin: "0 0 6px" }}>SUMMARY</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.6", color: "#222", margin: 0 }}>{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", borderBottom: "1px solid #999", paddingBottom: "4px", margin: "0 0 10px" }}>EXPERIENCE</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#000" }}>{exp.position} — {exp.company}</strong>
                <span style={{ fontSize: "11px", color: "#555" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              {exp.description && <p style={{ fontSize: "11px", color: "#333", lineHeight: "1.6", margin: "4px 0 0" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", borderBottom: "1px solid #999", paddingBottom: "4px", margin: "0 0 10px" }}>EDUCATION</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "12px", color: "#000" }}>{edu.degree} — {edu.school}</strong>
                <span style={{ fontSize: "11px", color: "#555" }}>{edu.startDate} – {edu.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#000", textTransform: "uppercase", borderBottom: "1px solid #999", paddingBottom: "4px", margin: "0 0 8px" }}>SKILLS</h2>
          <p style={{ fontSize: "12px", color: "#222", margin: 0, lineHeight: "1.6" }}>{skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

// ─── ATS PRO ─────────────────────────────────────────────
// ATS optimized but with subtle blue accents
export function ATSPro({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "40px 48px" }}>
      <div style={{ borderLeft: "5px solid #1d4ed8", paddingLeft: "16px", marginBottom: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#1e3a8a", margin: 0, textTransform: "uppercase" }}>
          {personal.firstName || "Your"} {personal.lastName || "Name"}
        </h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#1d4ed8", fontWeight: "600", margin: "4px 0 0" }}>{personal.jobTitle}</p>}
      </div>
      <div style={{ background: "#eff6ff", borderRadius: "6px", padding: "10px 16px", marginBottom: "20px", fontSize: "11px", color: "#1e40af", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {personal.email && <span>✉ {personal.email}</span>}
        {personal.phone && <span>📞 {personal.phone}</span>}
        {personal.city && <span>📍 {personal.city}{personal.country ? `, ${personal.country}` : ""}</span>}
      </div>

      {summary && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", margin: "0 0 8px" }}>Professional Summary</h2>
          <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151", margin: 0 }}>{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 12px" }}>Work Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#1e3a8a" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#6b7280", background: "#eff6ff", padding: "1px 8px", borderRadius: "4px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#1d4ed8", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong style={{ fontSize: "12px", color: "#1e3a8a" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#1d4ed8", margin: "2px 0" }}>{edu.school}</p>
              </div>
              <span style={{ fontSize: "11px", color: "#6b7280" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 10px" }}>Core Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => (
              <span key={i} style={{ fontSize: "11px", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", padding: "3px 12px", borderRadius: "4px", fontWeight: "500" }}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {languages.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1d4ed8", borderBottom: "1px solid #bfdbfe", paddingBottom: "6px", margin: "0 0 10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {languages.map((l, i) => (
              <span key={i} style={{ fontSize: "12px", color: "#374151" }}>{l.name} <span style={{ color: "#6b7280" }}>({l.level})</span></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}