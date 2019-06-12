import React from "react";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import BackToTopButton from "../components/BackToTopButton";

class Layout extends React.Component {
  handleScroll = e => {
    console.log("e.target.scroll");
  };

  render() {
    return (
      <div className="container" id="app">
        <Header />
        {this.props.children}
        <Footer />
        <BackToTopButton onScroll={this.handleScroll} />
      </div>
    );
  }
}

export default Layout;
