import React from "react";

export default function Checkbox({ label }) {
  return (
    <>
      <input type="checkbox" />
      <label>
        {label}
        University<span className="star">*</span>
      </label>
    </>
  );
}
