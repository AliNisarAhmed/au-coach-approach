import React from "react";
import logo from "../images/au-logo-full.png";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </li>
      <li>Discover AU</li>
      <li>
        <a>Programs and Courses</a>
      </li>
      <li>Admissions</li>
      <li>Current Students</li>
      <li>About AU</li>
      <li className="ml-auto">My AU</li>
      <li>Help and Contact</li>
      <li>Search</li>
    </ul>
  </nav>
);

export default Navbar;

// https://upload.wikimedia.org/wikipedia/en/7/79/Athabasca_University_Logo_2017.svg
