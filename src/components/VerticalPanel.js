import React from "react";

export default function VerticalPanel({ title, goals }) {
  return (
    <div className="vPanel">
      <div className="vPanel--title text-center">{title}</div>
      <div className="vPanel--textbox">
        {goals.map(goal => (
          <p>{goal}</p>
        ))}
      </div>
    </div>
  );
}
