import React from "react";
export default function AnalyzeResume() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Analyze Resume
        </h1>

        <p className="text-gray-600 mb-4 text-center">
          Upload your resume to get AI-based feedback.
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Analyze Resume
        </button>
      </div>
    </div>
  );
}