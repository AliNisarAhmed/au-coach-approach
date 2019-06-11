import React from "react";

export default function Button({ size, className }) {
  return (
    <button type="submit" className={`btn btn--${size} ${className}`}>
      Submit
    </button>
  );
}
