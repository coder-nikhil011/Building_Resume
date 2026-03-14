import React, { useState } from "react";

export default function PersonalDetails({ resume, setResume }) {
  const [showExtra, setShowExtra] = useState(false);

  const handleChange = (e) => {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setResume({
        ...resume,
        personal: { ...resume.personal, photo: reader.result },
      });
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoDelete = () => {
    setResume({
      ...resume,
      personal: { ...resume.personal, photo: null },
    });
  };

  const inputStyle =
    "w-full bg-gray-100 px-3 py-2 rounded-md outline-none ring-[0.5px] ring-gray-300 focus:ring-blue-500";

  return (
    <div className="bg-white p-5 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold">Personal Details</h2>

      {/* Photo Block */}
      <div className="flex items-center gap-4">
        {/* Hidden file input */}
        <input
          id="photoUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoUpload}
        />

        {resume.personal.photo ? (
          <div className="flex items-center gap-3">
            <img
              src={resume.personal.photo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border cursor-pointer"
              onClick={() => document.getElementById("photoUpload").click()}
            />
            <button
              type="button"
              onClick={handlePhotoDelete}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ) : (
          <div
            className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
            onClick={() => document.getElementById("photoUpload").click()}
          >
            +
          </div>
        )}
      </div>

      {/* Job Target */}
      <input
        name="jobTarget"
        placeholder="Job Target"
        value={resume.personal.jobTarget || ""}
        onChange={handleChange}
        className={inputStyle}
      />

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="firstName"
          placeholder="First Name"
          value={resume.personal.firstName || ""}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={resume.personal.lastName || ""}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="email"
          placeholder="Email"
          value={resume.personal.email || ""}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={resume.personal.phone || ""}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      {/* Links */}
      <input
        name="linkedin"
        placeholder="LinkedIn URL"
        value={resume.personal.linkedin || ""}
        onChange={handleChange}
        className={inputStyle}
      />

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          name="pincode"
          placeholder="Pin Code"
          value={resume.personal.pincode || ""}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          name="city"
          placeholder="City"
          value={resume.personal.city || ""}
          onChange={handleChange}
          className={inputStyle}
        />
        <input
          name="state"
          placeholder="State"
          value={resume.personal.state || ""}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      <input
        name="country"
        placeholder="Country"
        value={resume.personal.country || ""}
        onChange={handleChange}
        className={inputStyle}
      />

      {/* Toggle Extra Details */}
      <button
        type="button"
        onClick={() => setShowExtra(!showExtra)}
        className="text-blue-600 text-sm font-medium"
      >
        {showExtra ? "− Hide additional details" : "+ Add more details"}
      </button>

      {/* Extra Details */}
      {showExtra && (
        <div className="space-y-3">
          <input
            name="address"
            placeholder="Address"
            value={resume.personal.address || ""}
            onChange={handleChange}
            className={inputStyle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="nationality"
              placeholder="Nationality"
              value={resume.personal.nationality || ""}
              onChange={handleChange}
              className={inputStyle}
            />
            <input
              name="placeOfBirth"
              placeholder="Place of Birth"
              value={resume.personal.placeOfBirth || ""}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>
          <input
            type="date"
            name="dob"
            value={resume.personal.dob || ""}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      )}
    </div>
  );
}