import { useState } from "react";

export default function ResumeForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume Data:", form);
    alert("Resume data captured (check console)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Build Your Resume
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={form.summary}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          rows="3"
        />

        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <textarea
          name="education"
          placeholder="Education"
          value={form.education}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Save Resume
        </button>
      </form>
    </div>
  );
}