import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiReactNative,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        <h5>Python</h5><DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Java</h5><DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>React</h5><DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Nodejs</h5><DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>HTML</h5><DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>CSS</h5><DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>JavaScript</h5><DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Mongodb</h5><DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Firebase</h5><SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>Git</h5><DiGit/>
      </Col>
    </Row>
  );
}

export default Techstack;
