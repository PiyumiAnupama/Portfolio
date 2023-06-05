import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/4.png";
import emotion from "../../Assets/Projects/9.png";
import editor from "../../Assets/Projects/2.png";
import chatify from "../../Assets/Projects/5.png";
import suicide from "../../Assets/Projects/3.png";
import bitsOfCode from "../../Assets/Projects/1.png";
import uiux from "../../Assets/Projects/6.png";
import grphc from "../../Assets/Projects/7.png";
import tbl from "../../Assets/Projects/8.png";
import nvq from "../../Assets/Projects/10.png";
import r from "../../Assets/Projects/16.png";
import ai from "../../Assets/Projects/12.png";
import cv from "../../Assets/Projects/13.png";
import net from "../../Assets/Projects/14.png";
import qa from "../../Assets/Projects/15.png";
import sb from "../../Assets/Projects/17.png";
import dh from "../../Assets/Projects/18.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Open Source <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are the projects that I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hotel Booking App"
              description="I have delevopled full stack Hotel Booking App using react native and backend developed using Google firebase."
              ghLink="https://github.com/PiyumiAnupama/Hotel-Booking-Application"
              hasLink={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Examination System"
              description="Online Examination system is a MCQ base examination system. It provides an easy to use environment for both students and teachers. It develops using java and OOP concepts."
              ghLink="https://github.com/PiyumiAnupama/Online-Examination-System"
              hasLink={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sales Management System"
              description="Sales System project is useful for inventory management . Also it can be used for managing their sales and purchase. By the use of this software they can analyze daily sales and product inventory very easily. It develops using Python."
              ghLink="https://github.com/PiyumiAnupama/Sales-System"
              hasLink={true}            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog Application"
              description="I have developed Book Warm Blog Application. Frontend developed by React.js and Backend developed by Node js, Express, MongoDB, and APIs."
              ghLink="https://github.com/PiyumiAnupama/webApp"
              hasLink={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Website"
              description="I have designed Website for Kurunduwatta Holiday resort. It contains Facilities, Gallery, contacts, services etc: And Html,css,Js are used for it."
              ghLink="https://github.com/PiyumiAnupama/Kurunduwatta-Holiday-Resort"
              hasLink={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ball Rolling Game"
              description="I developed a 3D game using unity platform.I learn throught the development process :Use Unity Editor and its built-in capabilities to set up a simple game environment,Write your own custom scripts to create the game functionality,Create a basic user interface to improve the game experience,Build my game as other people can play it!"
              ghLink="https://github.com/PiyumiAnupama/BallRallingGame"
              hasLink={true}
              demoLink="https://drive.google.com/file/d/1_zLeEXHjV9FnC_oV_xg35j1lr_MkO0k7/view?usp=sharing/"
              //       <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="project-heading">
          Design <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        There are so many designing projects that I have done so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} >
            <ProjectCard
              imgPath={uiux}
              isBlog={false}
              title="UI UX Design"
              description="I have delevopled full stack Hotel Booking App using react native and backend developed using Google firebase."
              demoLink="https://drive.google.com/file/d/1_zLeEXHjV9FnC_oV_xg35j1lr_MkO0k7/view?usp=sharing/"
              hasLink={false}
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              imgPath={grphc}
              isBlog={false}
              title="Graphic Designs"
              description="I create visual designs for university clubs, such as Flyers, Posters, logos, digital arts, and presentations. My designs combine various elements to convey ideas and messages in a cohesive manner. To create these designs, I use Photoshop and Illustrator ."
              demoLink="https://www.behance.net/gallery/138889553/weLead"
              hasLink={false}
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              imgPath={tbl}
              isBlog={false}
              title="Coffee Table Book"
              description="Coffee table books need lots of it, in the form of generous margins, space around images, and space between lines of type.This coffee table book is a must-have for anyone who loves under water .I have included so many interesting characters.logos are designed using illustrator. Totaly book is designed using photoshop.Under water feeling is explored everywhere."
              demoLink="https://www.behance.net/gallery/138874095/Coffee-Table-Book"
              hasLink={false}
                           
            />
          </Col>

         
        </Row>
      </Container>
        <br></br><br></br>
      <Container>
        <h1 className="project-heading">
        Achievements & <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>Achievements, certifications and some cool things I've done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} >
            <ProjectCard
              imgPath={nvq}
              isBlog={false}
              title="ICT NVQ Level 4"
              demoLink="https://drive.google.com/file/d/1WJMBsQJjHyC-GtptGcolUh4GZMyUyyGx/view?usp=sharing"
              hasLink={false}
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              imgPath={r}
              isBlog={false}
              title="UI / UX for Beginners"
              
              demoLink="https://www.linkedin.com/posts/anupamapiyadigama_1000-free-courses-with-free-certificates-activity-7047998248493465600-rmhw?utm_source=share&utm_medium=member_desktop"
              hasLink={false}
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              imgPath={dh}
              isBlog={false}
              title="DHACK 2022 - Designathon Challenge"
              
              demoLink="https://www.linkedin.com/posts/anupamapiyadigama_uiux-unihelper-appdesign-activity-7071449973288042496-yhBn?utm_source=share&utm_medium=member_desktop"
              hasLink={false}
            />
          </Col>
          <p><p><p></p></p></p>

          <Col md={4} >
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning "
              
              demoLink="https://coursera.org/share/1c86b086253239bbadb776db26532ac6"
              hasLink={false}
                           
            />
          </Col>
          
           
          <Col md={4} >
            <ProjectCard
              imgPath={cv}
              isBlog={false}
              title="Introduction to Deep Learning with OpenCV"
              
              demoLink="https://www.linkedin.com/learning/certificates/a13030242785a3b8a7ac146eb7621af07e5731c40497afd5e277ec99faea9be2"
              hasLink={false}
                           
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              imgPath={net}
              isBlog={false}
              title="CompTIA Network+ (N10-007) Cert Prep: 7 Wireless, Virtual, Cloud, and Mobile Networking"
              
              demoLink="https://www.linkedin.com/learning/certificates/1516e84d24770c2795c9b1fae3a4fd4f3dde3091458f2c6a401c719ab96ed83a?trk=share_certificate"
              hasLink={false}
                           
            />
          </Col>
          <p><p><p></p></p></p>
          <Col md={4} >
            <ProjectCard
              imgPath={qa}
              isBlog={false}
              title="Software Testing Tutorial"
              
              demoLink="https://www.linkedin.com/posts/anupamapiyadigama_1000-free-courses-with-free-certificates-activity-7043078150477549568-XH5o?utm_source=share&utm_medium=member_desktop"
              hasLink={false}
                           
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              imgPath={sb}
              isBlog={false}
              title="Selenium Basics"
              
              demoLink="https://www.linkedin.com/posts/anupamapiyadigama_1000-free-courses-with-free-certificates-activity-7050457621987823616-_rqq?utm_source=share&utm_medium=member_desktop"
              hasLink={false}
                           
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
