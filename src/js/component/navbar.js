import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a class="navbar-brand" href="#">
          Starwars
        </a>
      </Link>
      
        <Link to="/demo">
          <button
            className="btn btn-danger"
            type="button"
                      >
            Favoritos
          </button>
        </Link>
      
    </nav>
  );
};
