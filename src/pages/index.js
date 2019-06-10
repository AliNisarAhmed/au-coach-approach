import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
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
import Footer from "../sections/Footer";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Welcome />
    <Goals />
    <Outline />
    <Completion />
    <Experts />
    <Form />
    <Footer />
  </Layout>
);

export default IndexPage;

// <SEO title="Home" />
