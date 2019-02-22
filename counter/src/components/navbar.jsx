import React from "react";

// stateless functional compoonet

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="view-source:https://getbootstrap.com/docs/4.1/examples/starter-template/"
      >
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
