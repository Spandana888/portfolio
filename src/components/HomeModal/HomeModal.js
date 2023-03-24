import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./HomeModal.css";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

const HomeModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="hamburger">
      <RxHamburgerMenu onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal-popup"
      >
        <Modal.Header closeButton>
          <h2>S</h2>
          <h3>Spandana</h3>
          <p>Web Developer</p>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/work">Works</Link>
            </li>
            <li>
              <Link to="mailto:spandanachinnappa@gmail.com">Contact</Link>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Link to="https://www.linkedin.com/in/spandana-n-chinnappa-a22507120/">
            <SiLinkedin />
          </Link>
          <Link to="https://github.com/Spandana888">
            <SiGithub />
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HomeModal;
