import { useState } from "react";
import React from "react";

export default function BuildResume() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Resume saved (demo)");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Build Resume
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Professional Summary"
            className="w-full border p-2 mb-4"
            rows="4"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Save Resume
          </button>
        </form>
      </div>
    </div>
  );
}