import React from "react";

import Layout from "../sections/layout";

import "../styles/main.scss";
import Hero from "../sections/Hero";
import Welcome from "../sections/Welcome";
import Goals from "../sections/Goals";
import Outline from "../sections/Outline";
import Completion from "../sections/Completion";
import Experts from "../sections/Experts";
import Form from "../sections/Form";
import SEO from "../components/seo";

import "@fortawesome/fontawesome-svg-core/styles.css";

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Welcome />
        <Goals />
        <Outline />
        <Completion />
        <Experts />
        <Form />
      </Layout>
    </>
  );
};

export default IndexPage;

// <SEO title="Home" />
