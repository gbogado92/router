import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <h2 className="navbar-brand">DB App</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active text-white"
              className="nav-link"
              aria-current="page"
              to="/mans"
            >
              Mans
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              aria-current="page"
              to="/womans"
            >
              Womans
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              aria-current="page"
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
