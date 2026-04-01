import React from "react";

export function Compact({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "32px 40px", fontSize: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "2px solid #374151", paddingBottom: "12px", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", margin: 0, color: "#111" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
          {personal.jobTitle && <p style={{ fontSize: "11px", color: "#6b7280", margin: "2px 0" }}>{personal.jobTitle}</p>}
        </div>
        <div style={{ textAlign: "right", fontSize: "10px", color: "#6b7280", lineHeight: "1.8" }}>
          {personal.email && <p style={{ margin: 0 }}>{personal.email}</p>}
          {personal.phone && <p style={{ margin: 0 }}>{personal.phone}</p>}
          {personal.city && <p style={{ margin: 0 }}>{personal.city}</p>}
        </div>
      </div>
      {summary && <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#374151", marginBottom: "14px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#374151", marginBottom: "8px", borderBottom: "1px solid #e5e7eb", paddingBottom: "3px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "11px" }}>{exp.position}</strong> <span style={{ color: "#6b7280" }}>@ {exp.company}</span>
                {exp.description && <p style={{ fontSize: "10px", color: "#555", margin: "2px 0", lineHeight: "1.5" }}>{exp.description}</p>}
              </div>
              <span style={{ fontSize: "10px", color: "#9ca3af", whiteSpace: "nowrap", marginLeft: "12px" }}>{exp.startDate} – {exp.endDate || "Now"}</span>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#374151", marginBottom: "8px", borderBottom: "1px solid #e5e7eb", paddingBottom: "3px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span><strong style={{ fontSize: "11px" }}>{edu.degree}</strong> <span style={{ color: "#6b7280" }}>— {edu.school}</span></span>
              <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#374151", marginBottom: "8px", borderBottom: "1px solid #e5e7eb", paddingBottom: "3px" }}>Skills</h2>
          <p style={{ fontSize: "11px", color: "#374151" }}>{skills.join(" · ")}</p>
        </div>
      )}
    </div>
  );
}

export function Clean({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#111", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#10b981", fontWeight: "500", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "16px", marginTop: "10px", fontSize: "12px", color: "#6b7280" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      {summary && <div style={{ marginBottom: "24px", padding: "16px", background: "#f0fdf4", borderRadius: "8px" }}><p style={{ fontSize: "13px", lineHeight: "1.7", color: "#374151", margin: 0 }}>{summary}</p></div>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "600", color: "#10b981", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", display: "flex", gap: "16px" }}>
              <div style={{ width: "3px", background: "#10b981", borderRadius: "2px", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#10b981", margin: "2px 0", fontWeight: "500" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "600", color: "#10b981", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "10px", display: "flex", gap: "16px" }}>
              <div style={{ width: "3px", background: "#d1fae5", borderRadius: "2px", flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#10b981", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "13px", fontWeight: "600", color: "#10b981", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", border: "1px solid #10b981", color: "#10b981", padding: "3px 12px", borderRadius: "20px" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

export function Corporate({ resume }) {
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

export function Stylish({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#be185d", color: "#fff", padding: "40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-30px", top: "-30px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", right: "40px", bottom: "-40px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <h1 style={{ fontSize: "30px", fontWeight: "800", margin: 0, position: "relative" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#fce7f3", marginTop: "6px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "11px", color: "#fbcfe8" }}>
          {personal.email && <span>✉ {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.city && <span>📍 {personal.city}</span>}
        </div>
      </div>
      <div style={{ padding: "36px 48px" }}>
        {summary && <div style={{ marginBottom: "24px", padding: "16px 20px", background: "#fdf2f8", borderRadius: "8px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#be185d", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px", paddingLeft: "14px", borderLeft: "3px solid #fbcfe8" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", background: "#fdf2f8", color: "#be185d", padding: "2px 8px", borderRadius: "12px", fontWeight: "600" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#be185d", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#be185d", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px", paddingLeft: "14px", borderLeft: "3px solid #fbcfe8" }}>
                <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#be185d", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#be185d", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#fdf2f8", color: "#be185d", border: "1px solid #fbcfe8", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Gradient({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(160deg, #f0f4ff 0%, #fdf4ff 100%)", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <div style={{ display: "inline-block", padding: "3px", borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #a855f7)", marginBottom: "12px" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", fontWeight: "700", color: "#4f46e5" }}>{(personal.firstName || "Y").charAt(0)}</div>
        </div>
        <h1 style={{ fontSize: "26px", fontWeight: "700", background: "linear-gradient(135deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#6366f1", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "6px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join("  ·  ")}</p>
      </div>
      {summary && <div style={{ marginBottom: "24px", background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "16px 20px", backdropFilter: "blur(4px)" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#4b5563", margin: 0 }}>{summary}</p></div>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "14px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px", background: "rgba(255,255,255,0.7)", borderRadius: "10px", padding: "14px 18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#312e81" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#e0e7ff", color: "#4f46e5", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "11px", color: "#6366f1", margin: "3px 0", fontWeight: "600" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#a855f7", marginBottom: "14px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.7)", borderRadius: "10px", padding: "12px 16px", marginBottom: "10px" }}>
              <strong style={{ fontSize: "12px", color: "#312e81" }}>{edu.degree}</strong>
              <p style={{ fontSize: "11px", color: "#a855f7", margin: "2px 0" }}>{edu.school}</p>
              <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", color: "#6366f1", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "#fff", padding: "4px 12px", borderRadius: "20px" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

export function Bold({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial Black, Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#000", color: "#fff", padding: "40px 48px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "900", margin: 0, textTransform: "uppercase", letterSpacing: "-1px" }}>{personal.firstName || "Your"}<br />{personal.lastName || "Name"}</h1>
        {personal.jobTitle && <div style={{ display: "inline-block", background: "#facc15", color: "#000", padding: "4px 14px", marginTop: "10px", fontWeight: "700", fontSize: "12px", textTransform: "uppercase" }}>{personal.jobTitle}</div>}
      </div>
      <div style={{ background: "#f5f5f5", padding: "12px 48px", display: "flex", gap: "24px", fontSize: "11px", color: "#555", borderBottom: "4px solid #facc15" }}>
        {personal.email && <span>✉ {personal.email}</span>}
        {personal.phone && <span>📞 {personal.phone}</span>}
        {personal.city && <span>📍 {personal.city}</span>}
      </div>
      <div style={{ padding: "36px 48px" }}>
        {summary && <div style={{ marginBottom: "24px", borderLeft: "6px solid #facc15", paddingLeft: "16px" }}><p style={{ fontSize: "13px", lineHeight: "1.7", color: "#333", margin: 0 }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#000", background: "#facc15", padding: "4px 12px", display: "inline-block", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "16px", paddingLeft: "12px", borderLeft: "4px solid #000" }}>
                <strong style={{ fontSize: "14px", color: "#000", textTransform: "uppercase" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#555", margin: "2px 0" }}>{exp.company} · {exp.startDate} – {exp.endDate || "Present"}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#444", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#000", background: "#facc15", padding: "4px 12px", display: "inline-block", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px", paddingLeft: "12px", borderLeft: "4px solid #000" }}>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#555", margin: "2px 0" }}>{edu.school} · {edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "#000", background: "#facc15", padding: "4px 12px", display: "inline-block", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#000", color: "#fff", padding: "5px 14px", fontWeight: "700", textTransform: "uppercase" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}