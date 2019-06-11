/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => (
  <div className="container" id="app">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

// <StaticQuery
//   query={graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   //
