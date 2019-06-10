import React from "react";

export default function Button({ size }) {
  return (
    <button type="submit" className={`btn btn--${size}`}>
      Submit
    </button>
  );
}
