import React from "react";
import Icon from "../components/Icon";
import BioCard from "../components/BioCard";

export default function Experts() {
  return (
    <section className="experts">
      <Icon />
      <h2 className="experts--heading">Meet the "experts" & the team</h2>
      <div className="experts--content">
        <BioCard />
        <BioCard />
        <BioCard />
      </div>
    </section>
  );
}
