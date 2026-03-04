import React from "react";
export default function PersonalDetails({ resume, setResume }) {
  const handleChange = (e) => {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-3">
      <h2 className="text-xl font-semibold">Personal Details</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={resume.personal.firstName}
        onChange={handleChange}
        className="input"
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={resume.personal.lastName}
        onChange={handleChange}
        className="input"
      />

      <input
        name="email"
        placeholder="Email"
        value={resume.personal.email}
        onChange={handleChange}
        className="input"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={resume.personal.phone}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
}