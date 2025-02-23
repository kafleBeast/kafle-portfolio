import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
  } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";



function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        
        <Col md="4" className="footer-body">
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                    href="https://github.com/kafleBeast"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  footer-social-icons"
                    >
                    <AiFillGithub className="social-icon" />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.linkedin.com/in/abckafle/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  footer-social-icons"
                    >
                    <FaLinkedinIn className="social-icon" />
                    </a>
                </li>
                
                <li className="social-icons">
                    <a
                    href="mailto:abhishekkafle5@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour footer-social-icons"
                    >
                    <MdEmail className="social-icon" />
                    </a>
                </li>
            </ul>
        </Col>
      <Col md="4" className="footer-copywright">
      {"Updated Jan 10, 2025"}
      </Col>
      </Row>
    </Container>
  );
}
export default Footer;
