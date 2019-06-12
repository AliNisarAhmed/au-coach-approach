import React from "react";
import Star from "./Star";

export default function Radio({ required, label, className }) {
  return (
    <div className={`radio ${className}`}>
      <div className="radio__text">
        <p>
          {<Star required={required} />}
          {label}
        </p>
      </div>
      <div className="radio__button">
        <input type="radio" />
        <label>enrolling in a program</label>
      </div>
      <div className="radio__button">
        <input type="radio" />
        <label>learning more about AU</label>
      </div>
    </div>
  );
}
