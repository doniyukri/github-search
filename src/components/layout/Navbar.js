import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <ion-icon name="logo-github" /> {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
