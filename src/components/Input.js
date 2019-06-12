import React from "react";
import Star from "./Star";

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
        <Star required={required} />
        {label}
      </label>
    </div>
  );
}
