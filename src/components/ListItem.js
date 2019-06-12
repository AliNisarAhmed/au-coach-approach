import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

export default function ListItem({
  clickedItem,
  onDropDownClick,
  parent,
  dropDownOpen,
  children,
}) {
  return (
    <li
      className={`navbar__listItem navbar__listItem--popDown navbar__collapse ${
        clickedItem === parent ? "active" : ""
      }`}
      id={parent}
      onClick={onDropDownClick}
      onFocus={onDropDownClick}
      onBlur={onDropDownClick}
      active={clickedItem === parent}
    >
      <button className="navbar__link">
        <span>{children}</span>
        <FontAwesomeIcon icon={faChevronDown} />
        <Dropdown
          open={dropDownOpen}
          clickedItem={clickedItem}
          parent={parent}
        />
      </button>
    </li>
  );
}
