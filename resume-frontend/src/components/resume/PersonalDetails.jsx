import React from "react";
export default function PersonalDetails({ resume, setResume }) {
  const update = (key, value) =>
    setResume({
      ...resume,
      personal: { ...resume.personal, [key]: value },
    });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Personal Details</h3>

      <input className="input" placeholder="First Name" onChange={e => update("firstName", e.target.value)} />
      <input className="input mt-2" placeholder="Last Name" onChange={e => update("lastName", e.target.value)} />
      <input className="input mt-2" placeholder="Email" onChange={e => update("email", e.target.value)} />
      <input className="input mt-2" placeholder="LinkedIn URL" />
    </div>
  );
}