import React from "react";
import FormContent from "../components/FormContent";
import RunningMan from "../components/RunningMan";

export default function Form() {
  return (
    <section className="form">
      <div className="form__box">
        <RunningMan />
        <h2 className="form__heading heading">Start your AU Journey...</h2>
        <p className="form__text text">
          We have information to share with you!
        </p>
        <FormContent />
      </div>
    </section>
  );
}
