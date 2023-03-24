import React from "react";
import { Link } from "react-router-dom";
import HomeModal from "../HomeModal/HomeModal";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-left">
        <h2>About me</h2>
        <p>
          I’m a Front-End Developer located in Poland. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences.
        </p>
        <p>
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of MMA, outdoor activities, TV series and
          English literature. A family person and father of two fractious boys,
        </p>
        <p>
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
      </div>
      <div className="about-right">
        <HomeModal />
        <div className="canvas-container">
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
                Node JS
              </Link>
            </li>
            <li>
              <Link></Link>
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
    </section>
  );
};

export default About;
