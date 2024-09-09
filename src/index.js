import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminApp from "./Admin/AdminApp";
import DocApp from "./Doctor/DocApp";
import PatApp from "./Patient/PatApp";
import HosApp from "./Hospital/HosApp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      {/* Main App Routes */}
      <Route path="/*" element={<AdminApp />} />

      {/* Admin App Routes */}
      <Route path="/Doctor/*" element={<DocApp />} />

      {/* User App Routes */}
      <Route path="/Patient/*" element={<PatApp />} />

      <Route path="/hospital/*" element={<HosApp />} />
    </Routes>
  </Router>
);
