import { useEffect } from "react";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import {
    AiFillGithub,
  } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "./images/self_img.jpg";

const LandingPage = () => {
    
    useEffect(()=>{
        document.title="Kafle";
    })
    return ( 

        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                <Row>
                    <Col md={6} className="home-header">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                        </span>
                    </h1>

                    <h1 className="heading-name">
                        I'M
                        <strong className="main-name"> Abhishek Kafle</strong>
                    </h1>

                    <p className="heading-description blockquote">
                        <p> Meet Abhishek, a driven and analytical Master's student in Statistics who is passionate about uncovering insights from data. 
                            Throughout Abhishek’s academic career, he has been fascinated by the power of statistics to inform decision-making and help 
                            solve real-world problems.
                        </p>  
                        <p> With a strong foundation in mathematics and statistics, Abhishek has honed their skills in data analysis, statistical 
                            modeling, and machine learning. He is proficient in programming languages such as R, Python, and SQL, and has experience 
                            working with large datasets. 
                        </p> 
                        <p> In addition to his technical expertise, Abhishek is an excellent communicator who can effectively convey complex statistical 
                            concepts to both technical and non-technical audiences. He understands the 
                        importance of collaborating with stakeholders to understand their needs and goals, and is committed to delivering insights 
                        that drive meaningful results.
                        </p> 
                        
                        <p> Outside of their studies, Abhisek enjoys staying active by playing soccer and ping pong. He finds pleasure in broadening 
                            his horizons by immersing himself in diverse cultural experiences, and often achieves this by engaging with cinema from 
                            around the world.
                       </p> 

                    </p>

                    <div className="heading-type">
                    <Typewriter
                        options={{
                            strings: [
                            "Mechanical Engineer",
                            "Applied Mathematician",
                            "Front-end developer",
                            
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                    </div>
                    </Col>

                    <Col md={5}>
                    <img src={myImg} className="profile-pic" alt="avatar" />
                    </Col>
                </Row>
                </Container>
            </Container>
            <Container fluid className="home-about-section" id="about">
                <Container>
                <Row>
                    <Col md={12} className="home-about-social">
                    <h1>Get in Touch</h1>
                    <p>
                        {" "}
                        Whether you want to get in touch, or talk about a project
                        collaboration.
                        <br />
                        <strong>Feel free to connect with me</strong>
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                            href="https://github.com/kafleBeast"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiFillGithub className="social-icon" />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/kafleabhishek/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <FaLinkedinIn className="social-icon" />
                            </a>
                        </li>
                        
                        <li className="social-icons">
                            <a
                            href="mailto:abhishekkafle5@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            >
                            <MdEmail className="social-icon" />
                            </a>
                        </li>
                    </ul>

                    </Col>
                </Row>
                </Container>
            </Container>
        </section>
     );
}
 
export default LandingPage;
