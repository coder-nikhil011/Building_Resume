import React from "react";
export default function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}