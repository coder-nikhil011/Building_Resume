import React from "react";
export default function ProgressBar({ value }) {
  return (
    <div className="bg-white p-3 rounded shadow">
      <p className="text-sm mb-1">Resume completeness</p>
      <div className="w-full bg-gray-200 rounded h-2">
        <div
          className="bg-indigo-500 h-2 rounded"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}