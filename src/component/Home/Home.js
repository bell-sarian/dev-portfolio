import React, { Component } from "react";
import Styles from "./Home.css";
import MaterialIcon, { colorPalette } from "material-icons-react";
import headshot from "../../assets/IMG_4582.JPG";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

export default class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="content">
          <div className="leftText">
            <div className="name">BELL</div>
            <div className="tags">
              <div className="tag1">Full Stack</div>
              <MaterialIcon
                icon="circle"
                color="#343434"
                size="15px"
                className="circle"
              />
              <div className="tag2">Software Development</div>
              <MaterialIcon
                icon="circle"
                color="#343434"
                size="15px"
                className="circle"
              />
              <div className="tag3">UI/UX</div>
            </div>
          </div>

          <div className="right">
            <div className="box"></div>
            <img src={headshot} alt="headshot" />
          </div>
        </div>
      </div>
    );
  }
}
