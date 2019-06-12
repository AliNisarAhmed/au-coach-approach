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
      <li className="navbar__hamburger">
        <button className="hamburger__container">
          <div className="hamburger"></div>
        </button>
      </li>
      <li className="navbar__listItem navbar__listItem--popDown navbar__collapse">
        <a href="/discover" className="navbar__link">
          <span>Discover AU</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="navbar__listItem navbar__collapse">
        <a href="/programs" className="navbar__link">
          <span>Programs & Courses</span>
        </a>
      </li>
      <li className="navbar__listItem navbar__listItem--popDown navbar__collapse">
        <a href="/admissions" className="navbar__link">
          <span>Admissions</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="navbar__listItem navbar__listItem--popDown navbar__collapse">
        <a href="/currentStudents" className="navbar__link">
          <span>Current Students</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="navbar__listItem navbar__listItem--popDown navbar__collapse">
        <a href="/about" className="navbar__link">
          <span>About AU</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </li>
      <li className="ml-auto navbar__listItem">
        <a href="/myAU" className="logo__link--myAU">
          <MyAU />
        </a>
      </li>
      <li className="navbar__listItem navbar__listItem--comments">
        <a href="/help" className="navbar__link">
          <FontAwesomeIcon icon={faComments} />
          <span>Help & Contact</span>
        </a>
      </li>
      <li className="navbar__listItem navbar__listItem--search">
        <FontAwesomeIcon icon={faSearch} />
      </li>
    </ul>
  </nav>
);

export default Navbar;

// https://upload.wikimedia.org/wikipedia/en/7/79/Athabasca_University_Logo_2017.svg
