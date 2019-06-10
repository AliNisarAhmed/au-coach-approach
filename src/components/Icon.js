import React from "react";

export default function Icon({
  size = "large",
  position = "default",
  color = "bg-primary",
}) {
  return <div className={`icon icon--${size} ${position} ${color}`}>ICON</div>;
}
