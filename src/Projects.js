import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Cards/ProjectsCards";

import greprep from "./images/greprep.jpg";
import finfo from "./images/finfo.jpg";

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
