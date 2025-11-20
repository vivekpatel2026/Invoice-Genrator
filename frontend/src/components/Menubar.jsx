import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function ManuBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Logo />
          <span
            className="fw-bold fs-5 mx-3"
            style={{ letterSpacing: "-0.5px", color: "#0D6EFDB2" }}
          >
            {/* Title here */}
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/dashboard">Dashboard</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/genrate">Generate</Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-primary rounded-pill px-4" to="/login">
                Login/Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
