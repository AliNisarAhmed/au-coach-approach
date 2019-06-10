import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Open, Flexible, and Everywhere</h2>
      <div className="footer__links">
        <a className="footer__link" href="#">
          A-Z Index
        </a>
        <a className="footer__link" href="#">
          Careers
        </a>
        <a className="footer__link" href="#">
          Undergraduate Calendar
        </a>
        <a className="footer__link" href="#">
          Graduate Calendar
        </a>
        <a className="footer__link" href="#">
          Program Plans
        </a>
        <a className="footer__link" href="#">
          Give to AU
        </a>
        <a className="footer__link" href="#">
          Email Newsletter
        </a>
      </div>
      <div>
        <p className="footer__copyright">
          &copy; 2019 Athabasca University is a world-class leader in online and
          distance education. Based in Alberta and available online around the
          world, we are Canada's Open University.{" "}
          <a className="footer__link">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
