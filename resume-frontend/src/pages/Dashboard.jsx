import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useResume } from "../context/ResumeContext";

export default function Dashboard() {
  const { user } = useAuth();
  const { savedResumes, loadResume, calculateProgress, resume } = useResume();
  const navigate = useNavigate();

  const progress = calculateProgress();
  const firstName = user?.name?.split(" ")[0] || "there";

  const stats = [
    { label: "Resumes created", value: savedResumes.length || 0, icon: "📄" },
    { label: "Profile complete", value: `${progress}%`, icon: "✅" },
    { label: "Templates available", value: "30+", icon: "🎨" },
  ];

  const quickActions = [
    {
      title: "Build Resume",
      desc: "Create a professional resume from scratch",
      href: "/build",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
        </svg>
      ),
      color: "bg-indigo-50 text-indigo-600",
      btnColor: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      title: "Analyze Resume",
      desc: "Get AI feedback on your existing resume",
      href: "/analyze",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      color: "bg-purple-50 text-purple-600",
      btnColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Browse Templates",
      desc: "Explore 30+ professional resume designs",
      href: "/build",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      ),
      color: "bg-green-50 text-green-600",
      btnColor: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Good morning, {firstName} 👋</h1>
          <p className="text-gray-500 text-sm mt-1">Here's what's happening with your resume today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map(({ label, value, icon }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        {progress < 100 && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-indigo-900">Complete your resume</p>
              <span className="text-sm font-bold text-indigo-600">{progress}%</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-indigo-600 text-xs mt-2">
              Add more details to improve your resume score.{" "}
              <Link to="/build" className="font-medium underline">Continue building →</Link>
            </p>
          </div>
        )}

        {/* Quick Actions */}
        <h2 className="text-base font-semibold text-gray-800 mb-4">Quick actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickActions.map(({ title, desc, href, icon, color, btnColor }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col gap-4">
              <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
              </div>
              <Link
                to={href}
                className={`text-white text-xs font-medium px-4 py-2 rounded-lg text-center transition-colors ${btnColor}`}
              >
                {title}
              </Link>
            </div>
          ))}
        </div>

        {/* Saved Resumes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-800">Your resumes</h2>
            <Link to="/build" className="text-indigo-600 text-sm font-medium hover:underline">+ New resume</Link>
          </div>

          {savedResumes.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 border-dashed p-10 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round"/>
                  <path d="M14 2v6h6M12 18v-6M9 15h6" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-gray-600 text-sm font-medium">No resumes yet</p>
              <p className="text-gray-400 text-xs mt-1">Start building your first resume</p>
              <Link to="/build" className="mt-4 inline-block bg-indigo-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Build now
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedResumes.map((r) => (
                <div key={r.id} className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round"/>
                        <path d="M14 2v6h6M16 13H8M16 17H8" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">{new Date(r.updatedAt).toLocaleDateString()}</span>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5 capitalize">{r.template} template</p>
                  <button
                    onClick={() => { loadResume(r); navigate("/build"); }}
                    className="mt-4 w-full text-indigo-600 text-xs font-medium border border-indigo-200 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    Open & Edit
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}