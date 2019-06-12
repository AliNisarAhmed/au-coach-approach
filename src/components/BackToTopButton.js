import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default class BackToTopButton extends Component {
  handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <button
        className="backToTop"
        id="backToTop"
        onScroll={this.props.handleScroll}
        onClick={this.handleClick}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    );
  }
}
