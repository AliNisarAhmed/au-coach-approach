import React from "react";
import Icon from "../components/Icon";
import Diagram from "../components/Diagram";
import Module from "../components/Module";
import { useStaticQuery, graphql } from "gatsby";

export default function Outline() {
  const data = useStaticQuery(graphql`
    query OutlineQuery {
      site {
        siteMetadata {
          courseOutline {
            weekNumber
            modules
          }
        }
      }
    }
  `);

  return (
    <section className="outline">
      <Icon size="large" color="bg-secondary" position="top" />
      <h2 className="outline__heading text-center">
        Course Outline and Timeline
      </h2>
      <div className="outline__content">
        {data.site.siteMetadata.courseOutline.map((outline, i) => {
          return (
            <div
              className={`outline__contentBox outline__contentBox--${i + 1}`}
            >
              <Diagram weekNumber={outline.weekNumber} />
              <Module modules={outline.modules} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
