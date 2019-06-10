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
      <h2 className="outline--heading text-center">
        Course Outline and Timeline
      </h2>
      <div className="outline--content">
        {data.site.siteMetadata.courseOutline.map(outline => {
          return (
            <div className="outline--contentBox">
              <Diagram weekNumber={outline.weekNumber} />
              <Module modules={outline.modules} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
