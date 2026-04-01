import React from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "edit", label: "Edit" },
  { id: "customize", label: "Templates" },
  { id: "ai", label: "AI Review" },
];

export default function ResumeNavbar({ activeTab, setActiveTab, handleDownload, handleSave, saving }) {
  return (
    <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Dashboard
        </Link>
        <div className="w-px h-5 bg-gray-200" />
        <span className="text-sm font-semibold text-gray-900">Resume Builder</span>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === id ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-1.5 text-sm border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          {saving ? (
            <div className="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" strokeLinecap="round"/>
              <path d="M17 21v-8H7v8M7 3v5h8" strokeLinecap="round"/>
            </svg>
          )}
          {saving ? "Saving..." : "Save"}
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-1.5 text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </button>
      </div>
    </div>
  );
}