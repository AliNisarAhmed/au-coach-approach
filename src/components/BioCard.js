import React from "react";
import Avatar from "./Avatar";

export default function BioCard() {
  return (
    <div className="bioCard">
      <Avatar />
      <h2 className="bioCard__heading heading heading--lg">Name</h2>
      <p className="bioCard__text text-center text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        consectetur quae rem tempora voluptates incidunt eaque sit optio
        doloribus consequuntur ea esse iusto nisi, aut cumque dignissimos modi
        beatae reprehenderit?
      </p>
    </div>
  );
}
