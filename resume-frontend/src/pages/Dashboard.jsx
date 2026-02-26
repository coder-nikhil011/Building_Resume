import React from "react";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Build Resume</h2>
            <p className="text-gray-600 text-sm">
              Create a professional resume in minutes.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Analyze Resume</h2>
            <p className="text-gray-600 text-sm">
              Get AI-based resume feedback.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">Templates</h2>
            <p className="text-gray-600 text-sm">
              Choose from modern resume templates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}