import React from "react";
import Icon from "./Icon";
import Diagram from "./Diagram";
import Module from "./Module";

export default function Outline() {
  return (
    <section className="outline">
      <Icon size="large" color="bg-secondary" position="top" />
      <h2 className="outline--heading text-center">
        Course Outline and Timeline
      </h2>
      <div className="outline--content">
        <Diagram />
        <Module />
      </div>
    </section>
  );
}
