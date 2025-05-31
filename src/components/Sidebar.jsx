import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sidebar ${sidebarOpen ? "show" : ""}`}>
      <h3 className="sidebar-title mb-4">Day 10 - Tasks</h3>
      <ul className="nav flex-column mb-4">
        {[...Array(13)].map((_, i) => (
          <li className="nav-item" key={i}>
            <Link
              className={`nav-link ${isActive(`/page${i + 1}`) ? "active" : ""}`}
              to={`/page${i + 1}`}
              onClick={() => setSidebarOpen(false)}
            >
              Task {i + 1}
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="sidebar-title mb-3">Mini Projects</h3>
      <ul className="nav flex-column">
        {[
          { to: "/mini1", label: "Counter Title" },
          { to: "/mini2", label: "User List" },
          { to: "/mini3", label: "Show/Hide Timer" },
          { to: "/mini4", label: "Search Filter" },
        ].map(({ to, label }) => (
          <li className="nav-item" key={to}>
            <Link
              className={`nav-link ${isActive(to) ? "active" : ""}`}
              to={to}
              onClick={() => setSidebarOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
