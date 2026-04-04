import React, { useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { label: "Build Resume", to: "/build" },
    { label: "Analyze Resume", to: "/analyze" },
    { label: "Templates", to: "/build" },
    { label: "AI Review", to: "/analyze" },
    { label: "Dashboard", to: "/dashboard" },
  ],
  Templates: [
    { label: "Classic Resume", to: "/build" },
    { label: "Modern Resume", to: "/build" },
    { label: "ATS Resume", to: "/build" },
    { label: "Creative Resume", to: "/build" },
    { label: "Fresher Resume", to: "/build" },
  ],
  Company: [
    { label: "About", to: "/" },
    { label: "Contact Us", to: "/" },
    { label: "What We Do", to: "/" },
    { label: "Careers", to: "/" },
  ],
  Other: [
    { label: "Pricing", to: "/pricing" },
    { label: "Privacy & Policies", to: "/" },
    { label: "Terms of Service", to: "/" },
    { label: "Help Center", to: "/" },
  ],
};

const socials = [
  { label: "Facebook", href: "#", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
  { label: "Instagram", href: "#", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
  { label: "X", href: "#", icon: <path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" /> },
  { label: "LinkedIn", href: "#", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
  { label: "YouTube", href: "#", icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
];

export default function Footer() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      <footer style={{ background: "#111827", color: "#fff", fontFamily: "Arial, sans-serif" }}>

        {/* ── Row 1: Logo + Socials ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 32px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontWeight: "700", fontSize: "18px", color: "#fff", letterSpacing: "-0.3px" }}>
              resume<span style={{ color: "#818cf8" }}>craft</span>
            </span>
          </Link>

          <div style={{ display: "flex", gap: "12px" }}>
            {socials.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label}
                style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", background: "rgba(255,255,255,0.05)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#6366f1"; e.currentTarget.style.borderColor = "#6366f1"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ maxWidth: "1280px", margin: "20px auto 0", padding: "0 32px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* ── Row 2: QR + Link Columns ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "36px 32px 40px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-start" }}>

          {/* QR + App Store */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "16px", display: "flex", gap: "14px", alignItems: "center", background: "rgba(255,255,255,0.03)" }}>
              {/* QR */}
              <div style={{ width: "80px", height: "80px", background: "#fff", borderRadius: "6px", padding: "5px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 100 100" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="white" />
                  <rect x="5" y="5" width="30" height="30" fill="none" stroke="#111827" strokeWidth="5" />
                  <rect x="15" y="15" width="10" height="10" fill="#111827" />
                  <rect x="65" y="5" width="30" height="30" fill="none" stroke="#111827" strokeWidth="5" />
                  <rect x="75" y="15" width="10" height="10" fill="#111827" />
                  <rect x="5" y="65" width="30" height="30" fill="none" stroke="#111827" strokeWidth="5" />
                  <rect x="15" y="75" width="10" height="10" fill="#111827" />
                  <rect x="45" y="5" width="8" height="8" fill="#111827" />
                  <rect x="55" y="5" width="8" height="8" fill="#111827" />
                  <rect x="45" y="15" width="8" height="8" fill="#111827" />
                  <rect x="55" y="25" width="8" height="8" fill="#111827" />
                  <rect x="45" y="45" width="8" height="8" fill="#111827" />
                  <rect x="55" y="55" width="8" height="8" fill="#111827" />
                  <rect x="65" y="45" width="8" height="8" fill="#111827" />
                  <rect x="75" y="55" width="8" height="8" fill="#111827" />
                  <rect x="85" y="45" width="8" height="8" fill="#111827" />
                  <rect x="45" y="65" width="8" height="8" fill="#111827" />
                  <rect x="55" y="75" width="8" height="8" fill="#111827" />
                  <rect x="65" y="85" width="8" height="8" fill="#111827" />
                  <rect x="85" y="75" width="8" height="8" fill="#111827" />
                  <rect x="85" y="85" width="8" height="8" fill="#111827" />
                </svg>
              </div>
              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#000", borderRadius: "8px", padding: "7px 14px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", minWidth: "140px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  <div>
                    <div style={{ fontSize: "8px", color: "#aaa", lineHeight: 1 }}>Download on the</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", lineHeight: 1.4 }}>App Store</div>
                  </div>
                </a>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#000", borderRadius: "8px", padding: "7px 14px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", minWidth: "140px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24"><path d="M3.18 23.76c.3.17.64.24.99.2L15.34 12 3.18.04a1.3 1.3 0 0 0-.99.2C1.83.56 1.5 1.05 1.5 1.66v20.68c0 .61.33 1.1.68 1.42z" fill="#EA4335" /><path d="M19.35 8.04L16.2 6.2 12.8 12l3.4 5.8 3.16-1.84A2.37 2.37 0 0 0 20.5 12a2.37 2.37 0 0 0-1.15-3.96z" fill="#FBBC04" /><path d="M3.18.04L16.2 6.2 12.8 12 3.18 23.96a1.3 1.3 0 0 1-.99-.2C1.83 23.44 1.5 22.95 1.5 22.34V1.66C1.5 1.05 1.83.56 2.19.24c.29-.2.65-.27.99-.2z" fill="#34A853" /><path d="M3.18.04l13.02 6.16L12.8 12 3.18 23.96C2.83 23.76 1.5 22.95 1.5 22.34V1.66C1.5 1.05 1.83.56 2.19.24L3.18.04z" fill="#4285F4" /></svg>
                  <div>
                    <div style={{ fontSize: "8px", color: "#aaa", lineHeight: 1 }}>GET IT ON</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", lineHeight: 1.4 }}>Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* 4 link columns */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "32px" }}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#fff", marginBottom: "16px", marginTop: 0 }}>{category}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link to={to}
                        style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                        onMouseLeave={e => e.currentTarget.style.color = "#6b7280"}
                      >{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <p style={{ fontSize: "13px", color: "#4b5563", margin: 0 }}>
            ResumeCraft Pvt. Ltd. © 2025 – {new Date().getFullYear()}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link to="/" style={{ fontSize: "13px", color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
            >Legal Terms</Link>
            <span style={{ color: "#374151" }}>·</span>
            <Link to="/" style={{ fontSize: "13px", color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
            >Privacy & Policies</Link>
          </div>
        </div>
      </footer>

      {/* ── Sticky bottom banner ── */}
      {bannerVisible && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
          background: "#1e1b4b",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 28px", gap: "16px", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
            <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p style={{ fontSize: "13px", color: "#c7d2fe", margin: 0 }}>
              Our AI-powered platform builds job-winning resumes with smart templates and instant feedback.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <Link to="/register" style={{
              display: "flex", alignItems: "center", gap: "7px",
              background: "#6366f1", color: "#fff", fontSize: "13px", fontWeight: "600",
              padding: "8px 18px", borderRadius: "8px", textDecoration: "none",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" />
                <path d="M14 2v6h6" strokeLinecap="round" />
              </svg>
              Build smarter
            </Link>
            <button onClick={() => setBannerVisible(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#4b5563", padding: "4px", display: "flex" }}
              onMouseEnter={e => e.currentTarget.style.color = "#9ca3af"}
              onMouseLeave={e => e.currentTarget.style.color = "#4b5563"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}