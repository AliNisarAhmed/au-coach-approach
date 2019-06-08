import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

import "../styles/main.scss";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Goals from "../components/Goals";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Welcome />
    <Goals />
    <div>Course outline</div>
    <div>Successful course completion</div>
    <div>Meet the experts</div>
    <div>FOrm</div>
    <footer>Footer</footer>
  </Layout>
);

export default IndexPage;

// <SEO title="Home" />
