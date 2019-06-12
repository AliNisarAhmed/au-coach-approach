import React from "react";

export default function Diagram({ weekNumber, connector }) {
  return (
    <div className="diagram">
      <div
        className={`outer-circle circle-1 ${
          connector ? "outer-circle__connector" : ""
        }`}
      >
        <div className="inner-circle">
          <p>Week</p>
          <h2>{weekNumber}</h2>
        </div>
      </div>
    </div>
  );
}
