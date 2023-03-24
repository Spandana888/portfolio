import React, { useState } from "react";
import "./Home.css";
import photo from "../../sources/spandana.jpeg";
import { Link } from "react-router-dom";
import resume from "../../sources/resume.pdf";
import HomeModal from "../HomeModal/HomeModal";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div id="home">
      <div className="home-left">
        <h1 aria-label="Hi, I'm Spandana, Web Developer">
          <span className="blast" aria-hidden="true">
            H
          </span>
          <span className="blast" aria-hidden="true">
            i
          </span>
          <span className="blast" aria-hidden="true">
            ,
          </span>
          <br />
          <span className="blast" aria-hidden="true">
            I
          </span>
          <span className="blast" aria-hidden="true">
            '
          </span>
          <span className="blast" aria-hidden="true">
            m{" "}
          </span>
          <span
            className={hovered ? "rubber-band flicker" : "blast flicker"}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            aria-hidden="true"
          >
            Spandana
          </span>
          <br />
          <span className="blast" aria-hidden="true">
            W
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            b{" "}
          </span>
          <span className="blast" aria-hidden="true">
            D
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            v
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            l
          </span>
          <span className="blast" aria-hidden="true">
            o
          </span>
          <span className="blast" aria-hidden="true">
            p
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            r
          </span>
        </h1>
        <p>Frontend Developer & UI/UX Designer</p>
        <div className="home-button">
          <Link
            className="resume"
            to={resume}
            download="Spandana-resume.pdf"
            target="_blank"
          >
            Download Resume
          </Link>
          <Link className="contact" to="mailto:spandanachinnappa@gmail.com">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="home-right">
        <HomeModal />
        <div className="portfolio-box">
          <div className="box">
            <div className="spin-container">
              <div className="shape">
                <img src={photo} alt="spandana's" className="portfolio-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
