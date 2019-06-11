import React from "react";

export default function VerticalPanel({ title, goals, number }) {
  return (
    <div className={`vPanel vPanel--${number}`}>
      <div className="vPanel--title text-center">{title}</div>
      <div className="vPanel--textbox">
        {goals.map(goal => (
          <p>{goal}</p>
        ))}
      </div>
    </div>
  );
}
