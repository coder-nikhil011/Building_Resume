import { useState } from "react";
import React from "react";

export default function Section({ title, children, score }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white border rounded-lg mb-6">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-4 py-3 border-b cursor-pointer"
      >
        <h2 className="font-semibold">
          {title}
          {score && (
            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
              {score}
            </span>
          )}
        </h2>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {open && <div className="p-4 space-y-4">{children}</div>}
    </div>
  );
}