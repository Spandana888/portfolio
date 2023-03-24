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
          Front-end developer with 5+ years of experience based in India. I have
          been associated with building, delivering applications & ensuring
          high-performance responsive websites that are fast, easy to use, and
          built with best practices. The main area of my expertise is front-end
          development, <strong>HTML, CSS, JS & React</strong> building small and
          medium web apps, custom plugins, features, animations, and coding
          interactive layouts.
        </p>
        <p>
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
        <p>
          Visit my{" "}
          <Link to="https://www.linkedin.com/in/spandana-n-chinnappa-a22507120/">
            LinkedIn{" "}
          </Link>
          profile for more details or just{" "}
          <Link to="mailto:spandanachinnappa@gmail.com">Contact </Link>me.
        </p>
        <div className="skill-list">
          <ul>
            <li>
              <Link to="https://en.wikipedia.org/wiki/HTML" target="_blank">
                HTML
              </Link>
            </li>
            <li>
              <Link to="https://en.wikipedia.org/wiki/HTML" target="_blank">
                CSS
              </Link>
            </li>
            <li>
              <Link
                to="https://en.wikipedia.org/wiki/JavaScript"
                target="_blank"
              >
                ES5/ES6
              </Link>
            </li>
            <li>
              <Link
                to="https://en.wikipedia.org/wiki/JavaScript"
                target="_blank"
              >
                TypeScript
              </Link>
            </li>
            <li>
              <Link
                to="https://en.wikipedia.org/wiki/Representational_state_transfer"
                target="_blank"
              >
                REST
              </Link>
            </li>
            <li>
              <Link to="https://en.wikipedia.org/wiki/JSON" target="_blank">
                JSON
              </Link>
            </li>
            <li>
              <Link to="https://en.wikipedia.org/wiki/Shopify" target="_blank">
                Shopify
              </Link>
            </li>
            <li>
              <Link to="https://en.wikipedia.org/wiki/Node.js" target="_blank">
                NodeJS
              </Link>
            </li>
            <li>
              <Link to="https://en.wikipedia.org/wiki/Git" target="_blank">
                Git
              </Link>
            </li>
            <li>
              <Link
                to="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                target="_blank"
              >
                Bootstrap
              </Link>
            </li>
            <li>
              <Link
                to="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                target="_blank"
              >
                SASS
              </Link>
            </li>
            <li>
              <Link to="https://reactjs.org/" target="_blank">
                ReactJS
              </Link>
            </li>
            <li>
              <Link to="https://en.wikipedia.org/wiki/JQuery" target="_blank">
                jQuery
              </Link>
            </li>
            <li>
              <Link to="https://mongoosejs.com/">SQL</Link>
            </li>
            <li>
              <Link to="https://www.npmjs.com/">NPM</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="skill-right">
        <HomeModal />
        <div className="skill-details">
          <Card className="skill-box">
            <Card.Body>
              <Card.Title>UI Developer</Card.Title>
              <p>
                <Link to="https://www.tcs.com/">Tata Consultancy Services</Link>
              </p>
              <p>
                <time>Dec 2017 - Jun 2022</time>
              </p>
              <p>
                Developed single-page application with Angular, typescript and
                SASS.Code development, code review and sanity testing.
              </p>
            </Card.Body>
          </Card>
          <Card className="skill-box">
            <Card.Body>
              <Card.Title>Front End Developer</Card.Title>
              <p>
                <Link to="https://www.publicissapient.com/">
                  Publicis Sapient
                </Link>
              </p>
              <p>
                <time>Jun 2022 - Till date</time>
              </p>
              <p>
                Involved in developing the UI pages using HTML, CSS, JavaScript,
                jQuery, Ajax and JSON. • Developed Responsive web pages,
                Designed and maintained client website using scripting language
                and content management
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
