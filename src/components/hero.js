import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "au-classroom.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  )
}
