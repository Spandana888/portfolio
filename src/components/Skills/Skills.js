import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import HomeModal from "../HomeModal/HomeModal";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill-left">
        <h2>Skills & Experience</h2>
        <p>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create web products for both
          business and consumer use.
        </p>
        <p>
          I create successful responsive websites that are fast, easy to use,
          and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, building small and medium web
          apps, custom plugins, features, animations, and coding interactive
          layouts.
        </p>
        <p>
          I also have full-stack developer experience with popular open-source
          CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
        </p>
        <p>
          Visit my{" "}
          <Link to="https://www.linkedin.com/in/spandana-n-chinnappa-a22507120/">
            LinkedIn{" "}
          </Link>
          profile for more details or just{" "}
          <Link to="mailto:spandanachinnappa@gmail.com">contact </Link>me.
        </p>
      </div>
      <div className="skill-right">
        <HomeModal />
        <div className="skill-details">
          <Card className="skill-box">
            <Card.Body>
              <Card.Title>UI Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                System Engineer
              </Card.Subtitle>
              <Card.Text>
                <p>
                  <Link to="https://www.tcs.com/">
                    Tata Consultancy Services
                  </Link>
                </p>
                <p>
                  <time>Dec 2017 - Jun 2022</time>
                </p>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="skill-box">
            <Card.Body>
              <Card.Title>Front End Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                System Engineer
              </Card.Subtitle>
              <Card.Text>
                <p>
                  <Link to="https://www.publicissapient.com/">
                    Publicis Sapient
                  </Link>
                </p>
                <p>
                  <time>Jun 2022 - Till date</time>
                </p>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
