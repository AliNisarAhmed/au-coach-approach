import React from "react";

export default function Input({
  label,
  type,
  required,
  value,
  handleValueChange,
  name,
  className,
}) {
  return (
    <div className={`input ${className}`}>
      <input
        type={type}
        required={required}
        value={value}
        onChange={handleValueChange}
        name={name}
      />
      <label className={`${value ? "smallLabel" : ""}`} htmlFor={name}>
        <span className="star">{required ? "*" : null}</span>
        {label}
      </label>
    </div>
  );
}
