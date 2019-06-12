import React from "react";

export default function Star({ required }) {
  return required ? <span className="star">* </span> : null;
}
