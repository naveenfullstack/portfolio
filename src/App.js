import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "../src/App.css"

/* IMPORT COMPORNENTS */
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} extend />
      </Routes>
    </Router>
  );
}
