import React from "react";

import resume from "./images/resume_new_2.png";

import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";

const Resume = () => {
  
    return (
      <div className="resume">
        <img src={resume} className="resume-pic" alt="resume" />
        <div className="download-resume">
          <Row style={{ justifyContent: "center", position: "relative"}}>
          <nav className="button-spacing">
          <Button variant="primary" href="https://drive.google.com/file/d/1GaQ7G-kZ6XWaoT_UBgd9CjwYfBHdWSRz/view?usp=sharing" 
          target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download Europass CV
          </Button>
          </nav>

          <nav className="button-spacing">
          <Button variant="primary" href="https://drive.google.com/file/d/1nN0OIpJgxclQtceLng4Oi5o155Jon-aX/view?usp=share_link" 
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
