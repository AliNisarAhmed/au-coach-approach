import React from "react";

export default function Checkbox({ label, receiveComs, className }) {
  return (
    <div className={`checkbox ${className}`}>
      <input type="checkbox" checked={receiveComs} />
      <label>
        {label}
        University<span className="star">*</span>
      </label>
    </div>
  );
}
