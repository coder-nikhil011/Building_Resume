import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b bg-white">

      <h1 className="text-lg font-bold">
        Resume Builder
      </h1>

      <div className="flex gap-6">

        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/build">Build Resume</Link>
        <Link to="/analyze">Analyze</Link>

      </div>

      <Link
        to="/login"
        className="bg-black text-white px-4 py-1 rounded"
      >
        Login
      </Link>

    </div>
  );
}