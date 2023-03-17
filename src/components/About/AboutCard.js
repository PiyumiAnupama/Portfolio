import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <h4 className="ed">University of Sri Jayewardenepura</h4>
          <h6 className="edu">BSc (Hons) in Information Technology    • 2020 - 2024</h6>
          <h6 className="edu"><li>In the First year I followed Psychology, Media, Political and ICT.</li></h6>
          <h6 className="edu"><li>Now I am following ICT BSc.Hons degree.</li></h6>
          <h6 className="edu"><li>I am working for a lots of clubs in my university life.</li></h6>
        <br></br>
       
        <h4 className="ed">Vocational Training Authorty</h4>
        <h6 className="edu">NVQ Level 4 (Graphic Design)    • 2021 Juny - 2022 January</h6>
        <h6 className="edu"><li>I have learned Adobe Photoshop, Adobe Illustrator, InDesign, & CorelDRAW</li></h6><h6></h6>
        
        
        <h6 className="edu">NVQ Level 4 (Information Communication Technology Technician)     • 2019 - 2020</h6>
        <h6 className="edu"><li>I have learned Office package, Networking, Graphic design, & Programming.</li></h6>
        <br></br>
       
        <h4 className="ed">Sanghamitta Girls' College, Galle</h4>
        <h6 className="edu">G.C.E Advance Level   • Aug 2018</h6>
        <h6 className="edu"><li>I went to Sanghamitta Girls' College to study Advanced Level. </li></h6>
        <h6 className="edu"><li>I followed Media, Political, and Sinhala as my Advanced Level subjects. </li></h6>
        <h6 className="edu"><li>I got through my A/L with 3A passes & fulfill my dream of going to university. </li></h6>
        <br></br>
       
        <h4 className="ed">Christ Church Girls' College, Baddegama</h4>
        <h6 className="edu">G.C.E Ordinary Level  • Dec 2015</h6>
        <h6 className="edu"><li>I went to Christ Church Girls' College from grade 6 through O/L.</li></h6>
        <h6 className="edu"><li>I got through my o/l with high marks(A-7 , C-2)</li></h6>
          </p>
          

          
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
