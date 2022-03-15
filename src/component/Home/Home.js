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
      <div class="HomeContainer">
        <div class="content">
          <div class="leftText">
            <div class="name">BELL</div>
            <div class="tags">
              <div class="tag1">Full Stack</div>
              <MaterialIcon
                icon="circle"
                color="#343434"
                size="15px"
                class="circle"
              />
              <div class="tag2">Software Development</div>
              <MaterialIcon
                icon="circle"
                color="#343434"
                size="15px"
                class="circle"
              />
              <div class="tag3">UI/UX</div>
            </div>
          </div>

          <div class="right">
            <div class="box"></div>
            <img src={headshot} alt="headshot" />
          </div>
        </div>
      </div>
    );
  }
}
