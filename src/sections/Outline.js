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
      <h3 className="outline__heading text-center heading heading--lg white">
        Course Outline and Timeline
      </h3>
      <div className="outline__content">
        {data.site.siteMetadata.courseOutline.map((outline, i, arr) => {
          return (
            <div
              className={`outline__contentBox outline__contentBox--${i + 1}`}
            >
              <Diagram
                weekNumber={outline.weekNumber}
                connector={i !== arr.length - 1}
              />
              <Module modules={outline.modules} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
