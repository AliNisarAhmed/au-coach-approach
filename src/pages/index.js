import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

import "../styles/main.scss";
import Hero from "../components/hero";
import Welcome from "../components/welcome";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Welcome />
    <div>Goals</div>
    <div>Course outline</div>
    <div>Successful course completion</div>
    <div>Meet the experts</div>
    <div>FOrm</div>
    <footer>Footer</footer>
  </Layout>
);

export default IndexPage;

// <SEO title="Home" />
