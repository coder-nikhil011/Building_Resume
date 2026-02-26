import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BuildResume from "./pages/BuildResume";
import AnalyzeResume from "./pages/AnalyzeResume";

// Components
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/build" element={<BuildResume />} />
        <Route path="/analyze" element={<AnalyzeResume />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}