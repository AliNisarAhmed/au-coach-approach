import React from "react";

export default function Dropdown({ open, clickedItem, parent }) {
  if (open && clickedItem === parent) {
    if (clickedItem === "discover") {
      return (
        <div className={`dropDown`}>
          <a href="#" className="dropDown__item">
            Discover AU
          </a>
          <a href="#" className="dropDown__item">
            Flexible and Open
          </a>
          <a href="#" className="dropDown__item">
            Credit for Experience
          </a>
          <a href="#" className="dropDown__item">
            How AU Works
          </a>
          <a href="#" className="dropDown__item">
            Getting Started
          </a>
          <a href="#" className="dropDown__item">
            AU Open House
          </a>
        </div>
      );
    } else if (clickedItem === "admissions") {
      return (
        <div className="dropDown">
          <a href="#" className="dropDown__item">
            Admissions
          </a>
          <a href="#" className="dropDown__item">
            Whats your students profile
          </a>
          <a href="#" className="dropDown__item">
            Admission Requirements
          </a>
          <a href="#" className="dropDown__item">
            International Student Guidelines
          </a>
        </div>
      );
    } else if (clickedItem === "currentStudents") {
      return (
        <div className="dropDown">
          <a href="#" className="dropDown__item">
            Current Students
          </a>
          <a href="#" className="dropDown__item">
            New Students
          </a>
          <a href="#" className="dropDown__item">
            my AU & Student Records
          </a>
          <a href="#" className="dropDown__item">
            Course Procedures
          </a>
        </div>
      );
    } else if (clickedItem === "aboutAU") {
      return (
        <div className="dropDown">
          <a href="#" className="dropDown__item">
            About AU
          </a>
          <a href="#" className="dropDown__item">
            At a Glance
          </a>
          <a href="#" className="dropDown__item">
            Faculties and Centres
          </a>
          <a href="#" className="dropDown__item">
            Governance
          </a>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}
