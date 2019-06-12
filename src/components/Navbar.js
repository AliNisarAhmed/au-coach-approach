import React from "react";
import Logo from "./Logo";
import MyAU from "./MyAU";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
      clickedItem: null,
    };

    this.onDropDownClick = this.onDropDownClick.bind(this);
  }

  onDropDownClick(e) {
    e.persist();
    console.log(e.target.id);
    this.setState(prevState => {
      if (prevState.dropDownOpen) {
        return {
          dropDownOpen: false,
          clickedItem: null,
        };
      } else {
        return {
          dropDownOpen: true,
          clickedItem: e.target.id,
        };
      }
    });
  }

  render() {
    const { dropDownOpen, clickedItem } = this.state;

    return (
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
          <li
            className={`navbar__listItem navbar__listItem--popDown navbar__collapse ${
              clickedItem === "discover" ? "active" : ""
            }`}
            id="discover"
            onClick={this.onDropDownClick}
            onFocus={this.onDropDownClick}
            onBlur={this.onDropDownClick}
            active={clickedItem === "discover"}
          >
            <button className="navbar__link">
              <span>Discover AU</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <Dropdown
                open={dropDownOpen}
                clickedItem={clickedItem}
                parent="discover"
              />
            </button>
          </li>
          <li className="navbar__listItem navbar__collapse">
            <a href="/programs" className="navbar__link">
              <span>Programs & Courses</span>
            </a>
          </li>
          <li
            className={`navbar__listItem navbar__listItem--popDown navbar__collapse ${
              clickedItem === "admissions" ? "active" : ""
            }`}
            id="admissions"
            onClick={this.onDropDownClick}
            onFocus={this.onDropDownClick}
            onBlur={this.onDropDownClick}
            active={clickedItem === "discover"}
          >
            <button href="/admissions" className="navbar__link">
              <span>Admissions</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <Dropdown
                open={dropDownOpen}
                clickedItem={clickedItem}
                parent="admissions"
              />
            </button>
          </li>
          <li
            className={`navbar__listItem navbar__listItem--popDown navbar__collapse ${
              clickedItem === "currentStudents" ? "active" : ""
            }`}
            id="currentStudents"
            onClick={this.onDropDownClick}
            onFocus={this.onDropDownClick}
            onBlur={this.onDropDownClick}
          >
            <button href="/currentStudents" className="navbar__link">
              <span>Current Students</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <Dropdown
                open={dropDownOpen}
                clickedItem={clickedItem}
                parent="currentStudents"
              />
            </button>
          </li>
          <li
            className={`navbar__listItem navbar__listItem--popDown navbar__collapse ${
              clickedItem === "aboutAU" ? "active" : ""
            }`}
            id="aboutAU"
            onClick={this.onDropDownClick}
            onFocus={this.onDropDownClick}
            onBlur={this.onDropDownClick}
          >
            <button href="/about" className="navbar__link">
              <span>About AU</span>
              <FontAwesomeIcon icon={faChevronDown} />
              <Dropdown
                open={dropDownOpen}
                clickedItem={clickedItem}
                parent="aboutAU"
              />
            </button>
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
            <button className="navbar__link">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

// https://upload.wikimedia.org/wikipedia/en/7/79/Athabasca_University_Logo_2017.svg
