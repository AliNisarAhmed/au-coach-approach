import React from "react";

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
