import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useResume } from "../context/ResumeContext";

const greetings = ["Good morning", "Good afternoon", "Good evening"];
const getGreeting = () => greetings[Math.floor(new Date().getHours() / 8)];

const StatCard = ({ label, value, icon, color, bg }) => (
  <div className={`${bg} rounded-2xl p-5 border border-opacity-20 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}>
    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-6 translate-x-6 group-hover:scale-110 transition-transform duration-300" />
    <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center text-xl mb-3 shadow-sm`}>{icon}</div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-gray-500 text-sm mt-0.5">{label}</p>
  </div>
);

const quickActions = [
  {
    title: "Build Resume",
    desc: "Create a new professional resume from scratch",
    href: "/build",
    gradient: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-50 hover:bg-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-600",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" />
        <path d="M14 2v6h6M12 18v-6M9 15h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Analyze Resume",
    desc: "Get AI-powered feedback and improvement tips",
    href: "/analyze",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 hover:bg-violet-100",
    iconBg: "bg-violet-100 text-violet-600",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Browse Templates",
    desc: "Explore 32+ stunning resume designs",
    href: "/build",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const { savedResumes, loadResume, calculateProgress } = useResume();
  const navigate = useNavigate();
  const [hoveredResume, setHoveredResume] = useState(null);

  const progress = calculateProgress();
  const firstName = user?.name?.split(" ")[0] || "there";

  const stats = [
    { label: "Resumes created", value: savedResumes.length || 0, icon: "📄", bg: "bg-white", color: "bg-indigo-100" },
    { label: "Profile complete", value: `${progress}%`, icon: "✅", bg: "bg-white", color: "bg-green-100" },
    { label: "Templates available", value: "32+", icon: "🎨", bg: "bg-white", color: "bg-violet-100" },
    { label: "AI reviews done", value: "0", icon: "🤖", bg: "bg-white", color: "bg-amber-100" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/80">
      {/* Top header banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }} />
        <div className="absolute right-0 top-0 w-80 h-full opacity-10">
          <div className="w-64 h-64 rounded-full bg-white absolute -top-20 -right-20" />
          <div className="w-40 h-40 rounded-full bg-white absolute bottom-0 right-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-indigo-200 text-sm">{getGreeting()},</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {firstName} 👋
              </h1>
              <p className="text-indigo-200 text-sm mt-1">Here's your resume dashboard</p>
            </div>
            <Link
              to="/build"
              className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              New Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 -mt-6">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        {/* Progress */}
        {progress < 100 && (
          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-indigo-900">Complete your resume profile</p>
                <span className="text-sm font-bold text-indigo-600 bg-indigo-100 px-2.5 py-0.5 rounded-full">{progress}%</span>
              </div>
              <div className="w-full bg-indigo-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2.5 rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-indigo-500 text-xs mt-2">
                {progress < 40 ? "Just getting started — add your details!" : progress < 70 ? "Great progress! Keep adding sections." : "Almost complete! Just a few more details."}
              </p>
            </div>
            <Link to="/build" className="flex-shrink-0 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 rounded-xl hover:opacity-90 transition-all shadow-md hover:-translate-y-0.5">
              Continue →
            </Link>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-500 rounded-full" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map(({ title, desc, href, gradient, bg, iconBg, icon }) => (
              <Link
                key={title}
                to={href}
                className={`${bg} rounded-2xl p-5 border border-transparent hover:border-indigo-100 transition-all duration-300 group hover:-translate-y-1 hover:shadow-md`}
              >
                <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                <div className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r ${gradient} px-3 py-1.5 rounded-lg group-hover:gap-2.5 transition-all`}>
                  Get started
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Saved Resumes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-5 bg-violet-500 rounded-full" />
              Your Resumes
            </h2>
            <Link to="/build" className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
              New resume
            </Link>
          </div>

          {savedResumes.length === 0 ? (
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center hover:border-indigo-300 transition-colors group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" />
                  <path d="M14 2v6h6M12 18v-6M9 15h6" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-gray-700 font-semibold mb-1">No resumes yet</p>
              <p className="text-gray-400 text-sm mb-5">Create your first resume and start applying</p>
              <Link to="/build" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-md hover:-translate-y-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
                Build your first resume
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedResumes.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  onMouseEnter={() => setHoveredResume(r.id)}
                  onMouseLeave={() => setHoveredResume(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-violet-200 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" />
                        <path d="M14 2v6h6M16 13H8M16 17H8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
                      {new Date(r.updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs mt-1 capitalize flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
                    {r.template} template
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => { loadResume(r); navigate("/build"); }}
                      className="flex-1 text-indigo-600 text-xs font-semibold border border-indigo-200 py-2 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" /></svg>
                      Edit
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-400 hover:text-gray-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tips section */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm font-bold text-amber-900">Pro Tip</p>
              <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                Use ATS-optimized templates when applying to large companies. Our <strong>ATS Basic</strong>, <strong>ATS Pro</strong>, and <strong>ATS Modern</strong> templates are specifically designed to pass applicant tracking systems.
              </p>
              <Link to="/build" className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-900 mt-2 underline underline-offset-2">
                Try ATS templates →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}