import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import FormContent from "./FormContent";

export default function Form() {
  return (
    <section className="form">
      <div className="form--box">
        <FontAwesomeIcon icon={faRunning} />
        <h2 className="form--heading">Start your AU Journey...</h2>
        <p className="form--text">We have information to share with you!</p>
        <FormContent />
      </div>
    </section>
  );
}
