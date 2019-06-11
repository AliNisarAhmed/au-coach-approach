import React from "react";
import Icon from "../components/Icon";

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__icons">
        <Icon size="small" />
        <Icon size="small" />
        <Icon size="small" />
        <Icon size="small" />
      </div>
      <div className="welcome__main">
        <Icon size="large" />
        <h3 className="welcome__heading text-center">
          Welcome to the Coach Approach for Leadership Development
        </h3>
        <div className="welcome__text">
          <div className="welcome__textLeft">
            <p className="welcome__text--top">
              While the coaching approach may sound simple, most leaders
              struggle to really listen to their team members, to ask good
              questions, to be empathetic and perhaps the most difficult ... to
              resist the urge to solve the problem themselves!
            </p>
            <p className="welcome__text--bottom">
              Over the next two weeks, you'll be exposed to the most recent and
              effective practical coaching approach tools through an enriched,
              interactive online experience to help you develop your leadership
              abilities to directly influence, to strengthen your communication
              abilities, and to build better individual relationships with your
              team members.
            </p>
          </div>
          <div className="welcome__textRight">
            <p className="welcome__text--top">
              Inspring leaders have many practiced tools and approaches in their
              toolkit. At times, leaders need to delegate, inspire, give
              direction, or hunker down and collaborate alongside their teams.
              Understanding and incorporating the "Coach Approach" is a powerful
              tool, adding rocket fuel to a leader's toolkit.
            </p>
            <p className="welcome__text--bottom">
              This course is designed to give you just that, rocket fuel, to
              amplify your leadership abilities through the coaching approach.
              This course brings together the best coaching approaches to help
              you strengthen your employee relationships, generate empowerment
              and ownership, increase engagement and overall support for your
              team members. This sounds easy right?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
