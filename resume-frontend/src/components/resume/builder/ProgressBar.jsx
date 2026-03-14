import React from "react";

export default function ProgressBar({ value }) {

  return (
    <div className="w-full">

      <div className="text-sm mb-1">
        Resume Strength {value}%
      </div>

      <div className="w-full bg-gray-200 rounded h-2">

        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}