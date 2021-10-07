import React, { Component } from "react";
import Styles from "../style/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div class="menuBarContainer">
        <div class="navLinks">
          <div>MENU</div>
          <div>ABOUT</div>
          <div>WORK</div>
          <div>PROJECTS</div>
          <div>CONTACT</div>
        </div>
        <div class="navLine"></div>
      </div>
    );
  }
}
