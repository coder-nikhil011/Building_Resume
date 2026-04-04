import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BuildResume from "./pages/BuildResume";
import AnalyzeResume from "./pages/AnalyzeResume";
import Pricing from "./pages/Pricing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const GuestRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return null;
  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

const Layout = ({ children }) => {
  const location = useLocation();
  // No navbar/footer on auth pages
  const noNavbar = ["/login", "/register"].some(p => location.pathname.startsWith(p));
  // No footer on builder page
  const noFooter = ["/build", "/login", "/register"].some(p => location.pathname.startsWith(p));

  return (
    <>
      {!noNavbar && <Navbar />}
      <main>{children}</main>
      {!noFooter && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/build" element={<BuildResume />} />
          <Route path="/analyze" element={<AnalyzeResume />} />

          {/* Auth */}
          <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
          <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

          {/* Protected */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}