import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import VerticalPanel from "../components/VerticalPanel";
import Icon from "../components/Icon";

export default function Goals() {
  const data = useStaticQuery(graphql`
    query GoalsQuery {
      site {
        siteMetadata {
          verticalPanels {
            title
            goals
          }
        }
      }
    }
  `);
  return (
    <section className="goals">
      <Icon size="large" />
      <h2 className="goals--title">Course Goals and Expectations</h2>
      <p className="goals--text text-center">
        Before the course starts, let's bring clarity to the goals of this
        course and why it was created. The meaning and practice of "coaching" is
        becoming better known; however, its definition if still not universal.
        This course will take you on a journey to provide you with relevant
        considerations, applications, and even provide you with a toolkit to
        help you put into practice the coaching approach. This course is not
        about showing you "the right way" but supporting you in your own
        leadership journey.
      </p>
      {data.site.siteMetadata.verticalPanels.map((vPanel, i) => (
        <VerticalPanel
          title={vPanel.title}
          goals={vPanel.goals}
          number={i + 1}
        />
      ))}
    </section>
  );
}
