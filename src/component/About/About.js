import React, { Component } from "react";
import Styles from "./About.css";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { ScrollRotate } from "react-scroll-rotate";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import WebFont from "webfontloader";
import AboutSquares from "./AboutSquares.js";
// import ScrollWheel from "../ScrollWheel/ScrollWheel.js";
// import Wheel from "../Wheel/Wheel.js";
// import RadialMenu from "../RadialMenu/RadialMenu.js";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

export default class About extends Component {
  state = {
    currentIndex: 0,
    value: 0,
  };

  nextIndex = () => {
    const { languages, currentIndex } = this.state;
    if (currentIndex == languages.length - 1) {
      return this.setState({ currentIndex: 0 });
    }

    return this.setState({
      currentIndex: currentIndex + 1,
    });
  };

  prevIndex = () => {
    const { languages, currentIndex } = this.state;
    if (currentIndex == 0) {
      return this.setState({
        currentIndex: languages.length - 1,
      });
    }

    return this.setState({
      currentIndex: currentIndex - 1,
    });
  };

  handleChange = (newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { languages, currentIndex } = this.state;
    return (
      <div class="AboutContainer">
        <div class="leftText">
          <div class="header">ABOUT</div>
          <p class="description">
            Hi there, my name is <span class="name">Bell Sarian</span>. I’m
            based in Los Angeles, CA where I work as a Software Engineer for
            Northrop Grumman Co. I am a Full Stack Developer with a passion for
            User-Centric Software. Web and mobile based applications are among
            some of my favorite projects to work on. I got my B.S., Computer
            Science from Azusa Pacific University in December 2020.
          </p>
        </div>

        <div class="wheelContainer">
          {/* <AboutSquares></AboutSquares> */}
          {/* <ScrollWheel></ScrollWheel> */}
          {/* <Wheel></Wheel> */}
          {/* <Wheel
            size={1000}
            numTicks={11}
            degrees={360}
            min={1}
            max={11}
            // value={30}
            // color={true}
            onChange={this.handleChange}
          /> */}
          {/* <RadialMenu /> */}
          <LanguageMenu />
        </div>
      </div>
    );
  }
}
