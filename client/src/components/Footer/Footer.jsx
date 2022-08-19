import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h3>Rohcodes</h3>
        
        <br />
        Made by {" "}
        <a
          href="https://instagram.com/nocodes_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rohit Parakh
        </a>
        . Rohcodes © 2022.
      </Container>
    </footer>
  );
}
