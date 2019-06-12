import React from "react";
import Navbar from "../components/Navbar";

class Header extends React.Component {
  componentDidMount() {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      let backToTopButton = document.querySelector(".backToTop");

      //  Displaying and Hiding the BackToTop Button
      if (currentScrollPos > 1000) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }

      // hiding the navbar on scroll down, showing it on scroll up
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-100px";
      }

      prevScrollPos = currentScrollPos;
    };
  }

  render() {
    return (
      <header className="header" id="header">
        <Navbar />
      </header>
    );
  }
}

export default Header;
