import React from "react";

export default function Radio({ required, label }) {
  return (
    <div className="radio">
      <p className="radio--text">
        {required && <span className="star">*</span>}
        {label}
      </p>
      <div className="radio--button">
        <input type="radio" />
        <label>enrolling in a program</label>
      </div>
      <div className="radio--button">
        <input type="radio" />
        <label>learning more about AU</label>
      </div>
    </div>
  );
}
