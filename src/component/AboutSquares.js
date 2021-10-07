import React, { Component } from "react";
import Styles from "../style/AboutSquares.css";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { ScrollRotate } from "react-scroll-rotate";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import WebFont from "webfontloader";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import ReactFloaterJs from "react-floaterjs";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

export default class About extends Component {
  render() {
    return (
      <div class="boxContainer">
        <ReactFloaterJs></ReactFloaterJs>
        <ScrollAnimation delay="5" initiallyVisible={false} animateIn="fadeIn">
          <div class="box">React</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">JavaScript</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">HTML</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">CSS</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">React Native</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">Python</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">C/C++</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">Java</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">PHP</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">SQL</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">x86 Assembly</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div class="box">GraphQL</div>
        </ScrollAnimation>
      </div>
    );
  }
}
