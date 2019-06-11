import React from "react";

export default function Module({ modules }) {
  return (
    <div className="module">
      {modules.map((module, i) => (
        <p>
          Module {i + 1}: {module}
        </p>
      ))}
    </div>
  );
}
