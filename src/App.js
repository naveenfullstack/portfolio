import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import ProjectDetailPage from "./pages/ProjectDetailPage";

/* IMPORT COMPORNENTS */
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} extend />
        <Route path="/projectdetail" element={<ProjectDetailPage />} extend />
      </Routes>
    </Router>
  );
}
