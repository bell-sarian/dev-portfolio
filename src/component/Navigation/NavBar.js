import React, { Component } from "react";
import Styles from "./NavBar.css";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <div className="menuBarContainer">
        <div className="navLinks">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            HOME
          </Link>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            ABOUT
          </Link>
          <Link activeClass="active" to="work" spy={true} smooth={true}>
            WORK
          </Link>
          <div>PROJECTS</div>
          <div>CONTACT</div>
        </div>
        <div className="navLine"></div>
      </div>
    );
  }
}
