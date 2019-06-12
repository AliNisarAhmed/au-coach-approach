import React from "react";
import Logo from "./Logo";
import MyAU from "./MyAU";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faSearch } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";

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
          <ListItem
            clickedItem={clickedItem}
            onDropDownClick={this.onDropDownClick}
            parent="discover"
            dropDownOpen={dropDownOpen}
          >
            Discover AU
          </ListItem>
          <li className="navbar__listItem navbar__collapse">
            <a href="/programs" className="navbar__link">
              <span>Programs & Courses</span>
            </a>
          </li>
          <ListItem
            clickedItem={clickedItem}
            onDropDownClick={this.onDropDownClick}
            parent="admissions"
            dropDownOpen={dropDownOpen}
          >
            Admissions
          </ListItem>
          <ListItem
            clickedItem={clickedItem}
            onDropDownClick={this.onDropDownClick}
            parent="currentStudents"
            dropDownOpen={dropDownOpen}
          >
            Current Students
          </ListItem>
          <ListItem
            clickedItem={clickedItem}
            onDropDownClick={this.onDropDownClick}
            parent="aboutAU"
            dropDownOpen={dropDownOpen}
          >
            About AU
          </ListItem>
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
