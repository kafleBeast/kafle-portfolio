import React from "react";

// import resume from "./images/resume.jpg";
import resume from "./images/Kafle_resume Uodated.png";

import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";

const Resume = () => {
  
    return (
      <div className="resume">
        <img src={resume} className="resume-pic" alt="resume" />
        <div className="download-resume">
          {/* <h2>Download</h2>
          <ul>
          <a href="https://drive.google.com/file/d/1GaQ7G-kZ6XWaoT_UBgd9CjwYfBHdWSRz/view?usp=sharing"> Europass CV</a>
          </ul>
          <ul>
          <a href="https://drive.google.com/file/d/10S0uv-PgvWNC-aNXvTn-q9NiYApuQ0CO/view?usp=sharing">General Resume</a>
          </ul> */}
          <Row style={{ justifyContent: "center", position: "relative"}}>
          <nav className="button-spacing">
          <Button variant="primary" href="https://drive.google.com/file/d/1GaQ7G-kZ6XWaoT_UBgd9CjwYfBHdWSRz/view?usp=sharing" 
          target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download Europass CV
          </Button>
          </nav>

          <nav className="button-spacing">
          <Button variant="primary" href="https://drive.google.com/file/d/1Nx7VpiGjT-zfMT79AZV34j2tC0_mpISH/view?usp=sharing" 
          target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download General Resume
          </Button>
          </nav>
          </Row>
        </div>
      </div>
    );
  }
   
  export default Resume;
