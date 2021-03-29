import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";

const Footer = () => {
  return (
    <div className="footer text-center">
      <Container>
        <Row>
          <Col xs="5">
            <img src={logo} alt="logo" className="footer-logo" />
            <p>© Все права защищены 2015-2021</p>
          </Col>
          <Col xs="7">
            <p>По всем вопросам звоните:</p>
            <div className="footer-contacts">
              <img src={phone} alt="phone" />
              <div>
                <a href="tel: +380990000000">+380990000000</a> <br />
                <a href="tel: +380990000000">+380990000000</a>
              </div>
            </div>
            <p>(Иван Иван)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
