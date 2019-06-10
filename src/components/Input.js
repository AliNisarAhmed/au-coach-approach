import React from "react";

export default function Input({
  label,
  type,
  required,
  value,
  handleValueChange,
  name,
}) {
  return (
    <div className="input">
      <input
        type={type}
        required={required}
        value={value}
        onChange={handleValueChange}
        name={name}
      />
      <label className={`${value ? "smallLabel" : ""}`} for={name}>
        <span className="star">{required ? "*" : null}</span>
        {label}
      </label>
    </div>
  );
}
