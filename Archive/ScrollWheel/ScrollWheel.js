import React, { useEffect, Component, useRef, useState } from "react";
import { render } from "react-dom";
import { gsap } from "gsap";
import MaterialIcon, { colorPalette } from "material-icons-react";

import { Draggable } from "gsap/Draggable";
import Styles from "./ScrollWheel.css";
import WebFont from "webfontloader";
import { Lang } from "./Lang.js";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

gsap.registerPlugin(Draggable);

export default function ScrollWheel() {
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  const radius = 150,
    diameter = radius * 2,
    element = document.querySelector("#circular-text");

  const textStyle = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    color: "red",
    // height: "20px",
  };

  useEffect(() => {
    var rotationSnap = 90;
    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "rotation",
      inertia: true,
      liveSnap: function (endValue) {
        return Math.round((endValue / rotationSnap) * rotationSnap);
      },
      onDragEnd() {
        console.log(this);
      },
    });
  }, []);

  const dots = () => {
    for (var i = 0; i <= 11; i++) {
      return (
        <div className="ray">
          <MaterialIcon
            icon="circle"
            color="#D28CCF"
            size="45px"
            className="lang-dot"
          />
          {/* <div className="lang">React</div> */}
        </div>
      );
    }
  };

  return (
    <div className="right-container">
      {/* <h2>React & GSAP Draggable</h2> */}
      <div className="languages">
        <div className="lang1">React</div>
        <div className="lang2">Javascript</div>
        <div className="lang3">Python</div>
        <div className="lang4">Java</div>
        <div className="lang5">React Native</div>
        <div className="lang6"></div>
      </div>
      <div className="draggable" ref={dragTarget}>
        <div id="circular-text" className="circular-text" style={{ textStyle }}>
          <div className="text-rays">
            {Lang.map((item, index) => {
              return (
                <div className="ray">
                  {/* <div className="lang">item.language</div> */}
                  <MaterialIcon
                    icon="circle"
                    color="#D28CCF"
                    size="35px"
                    className="lang-dot"
                  />
                </div>
              );
            })}
          </div>
          {/* <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div> */}
        </div>
      </div>
    </div>
  );
}

render(<ScrollWheel />, document.getElementById("root"));
