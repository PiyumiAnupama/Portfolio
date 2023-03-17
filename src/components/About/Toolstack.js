import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiAdobexd,
  SiAdobepremierepro,
} from "react-icons/si";

function Toolstack() {
  return (
    <><Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Visual Studio Code</h5><SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Postman</h5><SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Figma</h5><SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Adobe XD</h5><SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Adobe Illustrator</h5><SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Adobe Photoshop</h5><SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Adobe Premierepro</h5><SiAdobepremierepro />
      </Col>
      
    </Row><blockquote className="blockquote mb-0">
    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
    My  <strong className="purple">Skills</strong>
            </h1>
        <p style={{ textAlign: "justify" }}>
          <h4 className="ed">UI UX Design</h4>
          <h6 className="edu">I am passionate about designing visually appealing user interfaces that prioritize the user's needs and enhance the overall product experience.</h6>
          
          <br></br>

          <h4 className="ed">Mobile App Development</h4>
          <h6 className="edu">I utilize React Native to design and develop engaging digital experiences for mobile devices,for Android </h6>
  
          <br></br>

          <h4 className="ed">Website Development</h4>
          <h6 className="edu">I am passionate about front-end web development and have hands-on experience in coding HTML, CSS, and JavaScript. Additionally, I possess the skills to develop full-stack web applications using the MERN stack.</h6>
          
          <br></br>

          <h4 className="ed">Graphic design</h4>
          <h6 className="edu">I have a strong passion for graphic design and possess experience in designing diverse visual assets such as brands, logos, flyers, book covers, and PowerPoint presentations</h6>
          <br></br>
          <h4 className="ed">Video Editing</h4>
          <h6 className="edu">I have experience working on video projects for variety of purposes,and really enjoy working on video production.</h6>
  
          <br></br>

          <h4 className="ed">Software Development</h4>
          <h6 className="edu">I have experience in developing software using Python and Java</h6>
          
          <br></br>

          <h4 className="ed">Game Development</h4>
          <h6 className="edu">I have experience designing games using Unity Hub and developing them using C in VS Code</h6>
        </p>




      </blockquote></>
  );
}

export default Toolstack;
