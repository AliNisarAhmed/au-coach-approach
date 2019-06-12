import React from "react";

import Layout from "../sections/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";
// import Header from "../components/header";

import "../styles/main.scss";
import Hero from "../sections/Hero";
import Welcome from "../sections/Welcome";
import Goals from "../sections/Goals";
import Outline from "../sections/Outline";
import Completion from "../sections/Completion";
import Experts from "../sections/Experts";
import Form from "../sections/Form";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Welcome />
    <Goals />
    <Outline />
    <Completion />
    <Experts />
    <Form />
  </Layout>
);

export default IndexPage;

// <SEO title="Home" />
