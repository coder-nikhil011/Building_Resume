import React from "react";

export default function Activities({ resume, setResume }) {

  const add = () =>
    setResume({
      ...resume,
      activities: [
        ...resume.activities,
        { title: "", role: "", start: "", end: "", city: "", description: "" }
      ]
    });

  const remove = (i) => {
    const arr = resume.activities.filter((_, idx) => idx !== i);
    setResume({ ...resume, activities: arr });
  };

  const update = (i, k, v) => {
    const arr = [...resume.activities];
    arr[i] = { ...arr[i], [k]: v };
    setResume({ ...resume, activities: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-4">
      <h3 className="text-xl font-semibold">Extra Curricular Activities</h3>

      {resume.activities.map((a, i) => (
        <div key={i} className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Activity {i + 1}</span>
            <button
              onClick={() => remove(i)}
              className="text-red-400 hover:text-red-600 text-xs transition-colors"
            >
              Remove
            </button>
          </div>

          <input
            placeholder="Function Title"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-100"
            value={a.title}
            onChange={(e) => update(i, "title", e.target.value)}
          />

          <input
            placeholder="Your Role"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-100"
            value={a.role}
            onChange={(e) => update(i, "role", e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Start Date</label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400"
                value={a.start}
                onChange={(e) => update(i, "start", e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">End Date</label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400"
                value={a.end}
                onChange={(e) => update(i, "end", e.target.value)}
              />
            </div>
          </div>

          <input
            placeholder="City"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-100"
            value={a.city}
            onChange={(e) => update(i, "city", e.target.value)}
          />

          <textarea
            placeholder="Description (optional)"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-100 resize-none"
            rows={3}
            value={a.description}
            onChange={(e) => update(i, "description", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={add}
        className="flex items-center gap-1.5 text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        Add activity
      </button>
    </div>
  );
}