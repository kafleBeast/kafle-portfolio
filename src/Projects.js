import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Cards/ProjectsCards";

import greprep from "./images/greprep.jpg";
import finfo from "./images/finfo.jpg";
import research from "./images/research.png"
import seniorDesign from './images/seniorDesign.gif'

const PROJECTS = [
  {
    image: greprep,
    name: "GRE Vocab Preparation",
    technologyUsed: "ReactJs, Javascript",
    description: "A platform to learn vocabularies with the primary goal of scoring 160+ in GRE Verbal section. The website includes features to customize your personal list of words or to learn from the prewritten SETS. Users can also learn using flashcards or Quizzes.",
    url: "https://focused-wiles-f203aa.netlify.app",
  },
  {
    image: finfo,
    name: "FINFO",
    technologyUsed: "ReactJs, Javascript, R",
    description: "A web application that creates stock price forecast based on sentiment analysis by acquiring twitter data. Other features include: Company news, key financial data, and price in real-time, and screener",
    url: "https://wizardly-wozniak-1a82a7.netlify.app/",
  },
  {
    image: research,
    name: "Optimal Control of Several Motion Models",
    technologyUsed: "Python for Simulation",
    description: "This project targets the study and applications of a new challenging class of optimization problems for discontinuous differential inclusions governed by a generalized version of the Moreau sweeping process. To address such a new type of optimal control problem, a set of necessary optimality conditions was established. Considering these theoretical optimality conditions for the optimal control problems allows us to solve dynamic optimization problems for a microscopic version of the planar crowd motion models with obstacles.",
    url: "https://abhishekkafle.com.np/project/",
  },
  {
    image: seniorDesign,
    name: "Smart Trajectory Acquisition Response (STAR) System",
    technologyUsed: "OpenCV, Python, Arduino, CAD, 3D-printing",
    description: "In this year-long collaborative project, we designed and manufactured an electromechanical system consisting of a motion capture system using high FPS cameras, a data processing unit using the OpenCV library, and a mechanical 2-D response platform operated using microcontrollers. The response platform, which is a dartboard connected via pulleys to the stepper motors, intercepts the incoming dart by calculating its trajectory in real-time. The motivation to design such a system came from the emerging need to intercept and remove orbital debris, also known as “space junk”, which threatens human spaceflight and other robotic missions.",
    url: "https://docs.google.com/document/d/119gi_KJ1Ycaml0ALVMv3zG3diBU94sUiBAftzB6Bmlk/edit?usp=sharing",
  }
];

const Projects = () =>{
  

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
