import React, { Component } from "react";
import Styles from "./Home.css";
import headshot from "../../assets/IMG_4582.JPG";

import CircleIcon from "@mui/icons-material/Circle";

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
              <CircleIcon sx={{ color: "#343434" }} />
              <div className="tag2">Software Development</div>
              <CircleIcon sx={{ color: "#343434" }} />
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
