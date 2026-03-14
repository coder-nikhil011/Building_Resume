import React from "react";

const emptyEdu = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
  city: "",
  description: "",
};

export default function Education({ resume, setResume }) {

  const add = () => {
    setResume({
      ...resume,
      education: [...resume.education, { ...emptyEdu }],
    });
  };

  const update = (i, key, value) => {
    const arr = [...resume.education];
    arr[i][key] = value;
    setResume({ ...resume, education: arr });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-4">
      <h3 className="text-xl font-semibold">Education</h3>

      {resume.education.map((edu, i) => (
        <div key={i} className="bg-gray-50 p-4 rounded-lg space-y-2">

          <input
            placeholder="School / University"
            value={edu.school}
            onChange={(e) => update(i, "school", e.target.value)}
            className="input"
          />

          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => update(i, "degree", e.target.value)}
            className="input"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={edu.startDate}
              onChange={(e) => update(i, "startDate", e.target.value)}
              className="input"
            />

            <input
              type="date"
              value={edu.endDate}
              onChange={(e) => update(i, "endDate", e.target.value)}
              className="input"
            />
          </div>

          <input
            placeholder="City"
            value={edu.city}
            onChange={(e) => update(i, "city", e.target.value)}
            className="input"
          />

          <textarea
            placeholder="Description"
            value={edu.description}
            onChange={(e) => update(i, "description", e.target.value)}
            className="input"
          />

        </div>
      ))}

      <button
        onClick={add}
        className="text-indigo-600 text-sm font-medium"
      >
        + Add education
      </button>

    </div>
  );
}