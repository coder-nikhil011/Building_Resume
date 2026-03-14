import React from "react";
export function Hobbies({ resume, setResume }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-2">
      <h3 className="text-xl font-semibold">Hobbies</h3>
      <p className="text-sm text-gray-500">What do you like?</p>

      <textarea
        rows="3"
        value={resume.hobbies}
        onChange={(e) => setResume({ ...resume, hobbies: e.target.value })}
        placeholder="Reading, Music, Sports..."
        className="input"
      />
    </div>
  );
}