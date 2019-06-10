import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function BioCard() {
  return (
    <div className="bioCard">
      <FontAwesomeIcon icon={faUser} />
      <h2 className="bioCard--heading">Name</h2>
      <p className="bioCard--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        consectetur quae rem tempora voluptates incidunt eaque sit optio
        doloribus consequuntur ea esse iusto nisi, aut cumque dignissimos modi
        beatae reprehenderit?
      </p>
    </div>
  );
}
