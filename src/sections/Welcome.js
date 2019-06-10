import React from "react";
import Icon from "../components/Icon";

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome--icons">
        <Icon size="small" />
        <Icon size="small" />
        <Icon size="small" />
        <Icon size="small" />
      </div>
      <div className="welcome--main">
        <Icon size="large" />
        <h3 className="welcome--heading text-center">
          Welcome to the Coach Approach for Leadership Development
        </h3>
        <div className="welcome--text">
          <p>
            While the coaching approach may sound simple, most leaders struggle
            to really listen to their team members, to ask good questions, to be
            empathetic and perhaps the most difficult ... to resist the urge to
            solve the problem themselves!
          </p>
          <p>
            Over the next two weeks, you'll be exposed to the most recent and
            effective practical coaching approach tools through an enriched,
            interactive online experience to help you develop your leadership
            abilities to directly influence, to strengthen your communication
            abilities, and to build better individual relationships with your
            team members.
          </p>
          <p>
            Inspring leaders have many practiced tools and approaches in their
            toolkit. At times, leaders need to delegate, inspire, give
            direction, or hunker down and collaborate alongside their teams.
            Understanding and incorporating the "Coach Approach" is a powerful
            tool, adding rocket fuel to a leader's toolkit.
          </p>
          <p>
            This course is designed to give you just that, rocket fuel, to
            amplify your leadership abilities through the coaching approach.
            This course brings together the best coaching approaches to help you
            strengthen your employee relationships, generate empowerment and
            ownership, increase engagement and overall support for your team
            members. This sounds easy right?
          </p>
        </div>
      </div>
    </section>
  );
}
