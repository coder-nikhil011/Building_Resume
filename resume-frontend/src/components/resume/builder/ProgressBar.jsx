import React from "react";

export default function ProgressBar({ value }) {
  const color = value < 40 ? "bg-red-400" : value < 70 ? "bg-yellow-400" : "bg-green-500";
  const label = value < 40 ? "Getting started" : value < 70 ? "Looking good" : value < 100 ? "Almost there!" : "Complete!";

  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-xs font-semibold text-gray-700">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`${color} h-1.5 rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}