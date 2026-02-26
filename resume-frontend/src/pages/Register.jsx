import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created (demo)");
  };

  return (
    <div className="flex h-175 w-full">
      {/* Left Image */}
      <div className="w-1/2 hidden md:inline-block">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
        />
      </div>

      {/* Right Form */}
      <div className="w-full flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Create your account to get started
          </p>

          {/* Username */}
          <div className="flex items-center w-full mt-6 border border-gray-300/60 h-12 rounded-full pl-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 21a8 8 0 0 0-16 0"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent outline-none text-sm"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center w-full mt-4 border border-gray-300/60 h-12 rounded-full pl-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m22 6-10 7L2 6"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center w-full mt-4 border border-gray-300/60 h-12 rounded-full pl-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
                ry="2"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11V7a5 5 0 0 1 10 0v4"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full bg-indigo-500 text-white"
          >
            Create Account
          </button>

          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-400 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}