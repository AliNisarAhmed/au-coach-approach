import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import FormContent from "../components/FormContent";
import RunningMan from "../components/RunningMan";

export default function Form() {
  return (
    <section className="form">
      <div className="form__box">
        <RunningMan />
        <h2 className="form__heading">Start your AU Journey...</h2>
        <p className="form__text">We have information to share with you!</p>
        <FormContent />
      </div>
    </section>
  );
}
