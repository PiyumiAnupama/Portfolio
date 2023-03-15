import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/3.png";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehanceSquare } from 'react-icons/fa';
import { FaDribbbleSquare } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am an undergraduate student pursuing a BSc (Hons) degree in Information Technology at the Faculty of Humanities and Social Sciences, University of Sri Jayewardenepura.
              <br />
              <br />I create seamless and visually stunning digital experiences through 
              <i>
                <b className="purple"> UI/UX design, coding, and graphic design. </b>
              </i>
              I also enjoy watching movies, reading novels and traveling.
              <br />
              <br />
              I am a young enthusiastic individual who always seeks for the 
              opportunity. Therefore I have the ultimate intention of counting doing my stuff well. I really 
              like to meet and work with different people. I am much interested in developing new things which
               excite me a lot. 
              <i>
                
              </i>
              <br />
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              FEEL FREE TO <span className="purple">SNOOP AROUND </span>ON MY SOCIAL MEDIA.
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="tel:0703272432"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:anupamapiyadigama@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/PiyumiAnupama"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/piyumianupama1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaBehanceSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anupamapiyadigama/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dribbble.com/AnupamaPiyadigama"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDribbbleSquare />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
