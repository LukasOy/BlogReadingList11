import React from "react";
import { Link } from "react-router-dom";

const D1 = (
  {
  justifyContent: "space-between",
}
);
export const Navbar = () => {
  return ( 
    
    
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <div className="">
      <Link to="/">
    
        <a className="navbar-brand">
        <i className="fa-solid fa-flag col align-self-start p-1 m-1 row-2"></i>
        </a>
      </Link>
      </div>

      <div style={D1}>
        <Link to="/demo">
          <button type="button">
            Detalle de todos los Paises
          </button>
        </Link>
        </div>
        </div>
    </nav>
    
    
  );
};
