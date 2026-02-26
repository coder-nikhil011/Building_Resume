import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Build Resume", path: "/build" },
    { name: "Analyze", path: "/analyze" }, // ✅ FIXED
    { name: "Dashboard", path: "/dashboard" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Proper scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all
        ${isScrolled ? "bg-white shadow text-gray-800" : "bg-indigo-500 text-white"}`}
      >
        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          ResumeBuilder
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((l) => (
            <Link key={l.name} to={l.path} className="hover:underline">
              {l.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-black text-white px-4 py-1 rounded"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 md:hidden z-40">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl"
            >
              {l.name}
            </Link>
          ))}
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </>
  );
}