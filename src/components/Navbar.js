import React from "react";
import Logo from "./Logo";
import MyAU from "./MyAU";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li className="logo">
        <a href="/" className="logo__link">
          <Logo />
        </a>
      </li>
      <li className="navbar__listItem">
        <a href="/discover" className="navbar__link">
          <span>Discover AU</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="navbar__listItem">
        <a href="/programs" className="navbar__link">
          <span>Programs and Courses</span>
        </a>
      </li>
      <li className="navbar__listItem">
        <a href="/admissions" className="navbar__link">
          <span>Admissions</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="navbar__listItem">
        <a href="/currentStudents" className="navbar__link">
          <span>Current Students</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="navbar__listItem">
        <a href="/about" className="navbar__link">
          <span>About AU</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="ml-auto">
        <a href="/myAU" className="logo__link--myAU">
          <MyAU />
        </a>
      </li>
      <li className="navbar__listItem">
        <a href="/help" className="navbar__link">
          <FontAwesomeIcon icon={faComments} />
          <span>Help & Contact</span>
        </a>
      </li>
      <li className="navbar__listItem">
        <FontAwesomeIcon icon={faSearch} />
      </li>
    </ul>
  </nav>
);

export default Navbar;

// https://upload.wikimedia.org/wikipedia/en/7/79/Athabasca_University_Logo_2017.svg
