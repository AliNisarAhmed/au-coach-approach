import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__heading heading heading--md white">
        Open, Flexible, and Everywhere
      </h2>
      <div className="footer__links">
        <div className="footer__links--internal">
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
        <div className="footer__links--social">
          <a className="footer__link footer__link--social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="footer__link footer__link--social">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="footer__link footer__link--social">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="footer__link footer__link--social">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div>
        <p className="footer__copyright">
          &copy; 2019 Athabasca University is a world-class leader in online and
          distance education. Based in Alberta and available online around the
          world, we are Canada's Open University.{" "}
          <a className="footer__link footer__privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
