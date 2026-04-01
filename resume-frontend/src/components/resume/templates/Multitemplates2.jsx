import React from "react";

export function Timeline({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ borderBottom: "3px solid #0ea5e9", paddingBottom: "20px", marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#0c4a6e", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#0ea5e9", fontWeight: "600", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "6px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join("  ·  ")}</p>
      </div>
      {summary && <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#374151", marginBottom: "28px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "20px" }}>Experience</h2>
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, width: "2px", background: "#e0f2fe" }} />
            {experience.map((exp, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "20px" }}>
                <div style={{ position: "absolute", left: "-25px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "#0ea5e9", border: "2px solid #fff", boxShadow: "0 0 0 2px #0ea5e9" }} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#0c4a6e" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", color: "#0ea5e9", background: "#e0f2fe", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#0ea5e9", margin: "2px 0", fontWeight: "500" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>Education</h2>
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, width: "2px", background: "#e0f2fe" }} />
            {education.map((edu, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "14px" }}>
                <div style={{ position: "absolute", left: "-25px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "#7dd3fc", border: "2px solid #fff", boxShadow: "0 0 0 2px #7dd3fc" }} />
                <strong style={{ fontSize: "13px", color: "#0c4a6e" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#0ea5e9", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#e0f2fe", color: "#0369a1", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

export function Sidebar({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ width: "240px", background: "#f97316", color: "#fff", padding: "36px 20px", flexShrink: 0 }}>
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", fontWeight: "700" }}>{(personal.firstName || "Y").charAt(0)}</div>
        <h1 style={{ fontSize: "16px", fontWeight: "700", textAlign: "center", margin: "0 0 4px" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "10px", color: "#fed7aa", textAlign: "center", marginBottom: "20px" }}>{personal.jobTitle}</p>}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "16px", marginBottom: "16px" }}>
          <p style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>Contact</p>
          {personal.email && <p style={{ fontSize: "10px", color: "#fff", marginBottom: "4px", wordBreak: "break-all" }}>{personal.email}</p>}
          {personal.phone && <p style={{ fontSize: "10px", color: "#fff", marginBottom: "4px" }}>{personal.phone}</p>}
          {personal.city && <p style={{ fontSize: "10px", color: "#fff" }}>{personal.city}</p>}
        </div>
        {skills.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "16px", marginBottom: "16px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>Skills</p>
            {skills.map((s, i) => <p key={i} style={{ fontSize: "10px", color: "#fff", marginBottom: "4px", paddingLeft: "8px", borderLeft: "2px solid rgba(255,255,255,0.4)" }}>{s}</p>)}
          </div>
        )}
        {languages.length > 0 && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "16px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>Languages</p>
            {languages.map((l, i) => <p key={i} style={{ fontSize: "10px", color: "#fff", marginBottom: "4px" }}>{l.name} – {l.level}</p>)}
          </div>
        )}
      </div>
      <div style={{ flex: 1, padding: "36px 28px" }}>
        {summary && <div style={{ marginBottom: "22px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#555" }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "12px" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#f97316", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#f97316", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#f97316", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Portfolio({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], links = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0f172a", color: "#e2e8f0", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px" }}>
      <div style={{ marginBottom: "36px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", margin: 0, color: "#f8fafc" }}>{personal.firstName || "Your"}<span style={{ color: "#38bdf8" }}> {personal.lastName || "Name"}</span></h1>
        {personal.jobTitle && <p style={{ fontSize: "14px", color: "#38bdf8", marginTop: "6px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "12px", fontSize: "11px", color: "#64748b", flexWrap: "wrap" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      {summary && <div style={{ marginBottom: "28px", padding: "20px", border: "1px solid #1e293b", borderRadius: "8px", borderLeft: "4px solid #38bdf8" }}><p style={{ fontSize: "13px", lineHeight: "1.7", color: "#94a3b8", margin: 0 }}>{summary}</p></div>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "14px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "16px", padding: "16px", background: "#1e293b", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px", color: "#f8fafc" }}>{exp.position}</strong>
                <span style={{ fontSize: "10px", background: "#0c4a6e", color: "#38bdf8", padding: "2px 10px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#38bdf8", margin: "3px 0", fontWeight: "500" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {education.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "12px", padding: "12px", background: "#1e293b", borderRadius: "8px" }}>
                <strong style={{ fontSize: "12px", color: "#f8fafc" }}>{edu.degree}</strong>
                <p style={{ fontSize: "11px", color: "#38bdf8", margin: "2px 0" }}>{edu.school}</p>
                <p style={{ fontSize: "10px", color: "#475569" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#1e293b", color: "#38bdf8", border: "1px solid #1e40af", padding: "4px 10px", borderRadius: "4px" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Designer({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "8px", background: "linear-gradient(180deg, #6366f1, #8b5cf6, #a855f7)" }} />
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 260px" }}>
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

export function Clear({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px 56px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "600", color: "#111", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "8px", fontSize: "11px", color: "#9ca3af" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ height: "2px", background: "#f3f4f6", marginBottom: "24px" }} />
      {summary && <p style={{ fontSize: "13px", lineHeight: "1.8", color: "#4b5563", marginBottom: "24px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#9ca3af", marginBottom: "14px" }}>Work Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "16px" }}>
              <div style={{ width: "90px", flexShrink: 0, paddingTop: "2px" }}>
                <p style={{ fontSize: "10px", color: "#9ca3af", lineHeight: "1.5" }}>{exp.startDate}<br />– {exp.endDate || "Present"}</p>
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "13px", color: "#111" }}>{exp.position}</strong>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#9ca3af", marginBottom: "14px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "12px" }}>
              <div style={{ width: "90px", flexShrink: 0 }}>
                <p style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</p>
              </div>
              <div>
                <strong style={{ fontSize: "13px", color: "#111" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#9ca3af", marginBottom: "12px" }}>Skills</h2>
          <p style={{ fontSize: "12px", color: "#374151", lineHeight: "2.2" }}>{skills.join("  /  ")}</p>
        </div>
      )}
    </div>
  );
}

export function Managerial({ resume }) {
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

export function Simple({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box", padding: "48px 52px" }}>
      <h1 style={{ fontSize: "26px", fontWeight: "600", color: "#111", margin: "0 0 4px" }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
      {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px" }}>{personal.jobTitle}</p>}
      <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "24px" }}>{[personal.email, personal.phone, personal.city].filter(Boolean).join(" · ")}</p>
      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: "22px" }} />
      {summary && <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#555", marginBottom: "22px" }}>{summary}</p>}
      {experience.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#111", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong style={{ fontSize: "13px" }}>{exp.position}</strong>
                <span style={{ fontSize: "11px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{exp.company}</p>
              {exp.description && <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: "22px" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#111", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <div>
                <strong style={{ fontSize: "13px" }}>{edu.degree}</strong>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0" }}>{edu.school}</p>
              </div>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#111", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#f3f4f6", color: "#374151", padding: "4px 12px", borderRadius: "4px" }}>{s}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

export function Specialist({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#065f46", color: "#fff", padding: "36px 48px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "13px", color: "#6ee7b7", marginTop: "4px", fontWeight: "500" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px", fontSize: "11px", color: "#a7f3d0" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ padding: "32px 48px" }}>
        {summary && <div style={{ marginBottom: "22px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#374151" }}>{summary}</p></div>}
        {experience.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#065f46", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #6ee7b7", paddingBottom: "6px", marginBottom: "14px" }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "14px", paddingLeft: "12px", borderLeft: "3px solid #d1fae5" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "13px", color: "#064e3b" }}>{exp.position}</strong>
                  <span style={{ fontSize: "10px", background: "#d1fae5", color: "#065f46", padding: "2px 8px", borderRadius: "12px" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#059669", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#065f46", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #6ee7b7", paddingBottom: "6px", marginBottom: "14px" }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                  <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#059669", margin: "2px 0" }}>{edu.school}</p>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: "13px", fontWeight: "700", color: "#065f46", textTransform: "uppercase", letterSpacing: "1.5px", borderBottom: "2px solid #6ee7b7", paddingBottom: "6px", marginBottom: "12px" }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skills.map((s, i) => <span key={i} style={{ fontSize: "11px", background: "#d1fae5", color: "#065f46", padding: "4px 12px", borderRadius: "20px", fontWeight: "500" }}>{s}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TwoColumn({ resume }) {
  const { personal = {}, summary = "", experience = [], education = [], skills = [], languages = [] } = resume;
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", width: "794px", minHeight: "1123px", boxSizing: "border-box" }}>
      <div style={{ background: "#4338ca", color: "#fff", padding: "32px 48px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "700", margin: 0 }}>{personal.firstName || "Your"} {personal.lastName || "Name"}</h1>
        {personal.jobTitle && <p style={{ fontSize: "12px", color: "#c7d2fe", marginTop: "4px" }}>{personal.jobTitle}</p>}
        <div style={{ display: "flex", gap: "20px", marginTop: "8px", fontSize: "11px", color: "#a5b4fc" }}>
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.city && <span>{personal.city}</span>}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 220px" }}>
        <div style={{ padding: "28px 32px", borderRight: "1px solid #e5e7eb" }}>
          {summary && <div style={{ marginBottom: "20px" }}><p style={{ fontSize: "12px", lineHeight: "1.7", color: "#555" }}>{summary}</p></div>}
          {experience.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Experience</h2>
              {experience.map((exp, i) => (
                <div key={i} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ fontSize: "12px" }}>{exp.position}</strong>
                    <span style={{ fontSize: "10px", color: "#9ca3af" }}>{exp.startDate} – {exp.endDate || "Present"}</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#4338ca", fontWeight: "600", margin: "2px 0" }}>{exp.company}</p>
                  {exp.description && <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: "1.6", marginTop: "4px" }}>{exp.description}</p>}
                </div>
              ))}
            </div>
          )}
          {education.length > 0 && (
            <div>
              <h2 style={{ fontSize: "12px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Education</h2>
              {education.map((edu, i) => (
                <div key={i} style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong style={{ fontSize: "12px" }}>{edu.degree}</strong>
                    <span style={{ fontSize: "10px", color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#4338ca", margin: "2px 0" }}>{edu.school}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: "28px 20px", background: "#f5f3ff" }}>
          {skills.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Skills</h2>
              {skills.map((s, i) => (
                <div key={i} style={{ marginBottom: "8px" }}>
                  <p style={{ fontSize: "11px", color: "#374151", marginBottom: "3px" }}>{s}</p>
                  <div style={{ height: "3px", background: "#ddd6fe", borderRadius: "2px" }}>
                    <div style={{ height: "3px", background: "#4338ca", borderRadius: "2px", width: `${65 + (i * 11) % 30}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#4338ca", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Languages</h2>
              {languages.map((l, i) => (
                <p key={i} style={{ fontSize: "11px", color: "#374151", marginBottom: "6px" }}>{l.name} <span style={{ color: "#818cf8" }}>– {l.level}</span></p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}