import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light row-6">
      <Link to="/">
        <a className="navbar-brand">
        <i className="fa-solid fa-flag"></i>
        </a>
      </Link>
      
        <Link to="/demo">
          <button
            className="btn btn-danger row-6"
            type="button"
                      >
            Info Países
          </button>
        </Link>
      
    </nav>
  );
};
