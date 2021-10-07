// import React, { Component } from "react";
// import Styles from "../style/ScrollWheel.css";
// import CircleType from "circletype";

// export default class ScrollWheel extends Component {
//   circular() {
//     const CircleType = new CircleType(
//       document.getElementById("rotated")
//     ).radius(80);
//     window.scroll(function () {
//       var offset = window.scrollTop();
//       offset = offset * 0.4;

//       document.getElementsByClassName("circular-text").css({
//         "-moz-transfrom": "rotate(" + offset + "deg)",
//         "-webkit-transfrom": "rotate(" + offset + "deg)",
//         "-o-transfrom": "rotate(" + offset + "deg)",
//         "-ms-transfrom": "rotate(" + offset + "deg)",
//         transfrom: "rotate(" + offset + "deg)",
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="sub-container">
//           <div className="circular-text">
//             <span id="rotated">
//               React • JavaScript • HTML • CSS • React Native • Python • C/C++ •
//               Java • PHP • x86 Assembly • GraphQL
//             </span>
//           </div>
//         </div>
//         <script>this.circular</script>
//         <div>{this.circular}</div>
//       </div>
//     );
//   }
// }

import React, { useEffect, Component, useRef, useState } from "react";
import { render } from "react-dom";
import { gsap } from "gsap";
import MaterialIcon, { colorPalette } from "material-icons-react";

import { Draggable } from "gsap/Draggable";
import Styles from "../style/ScrollWheel.css";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

gsap.registerPlugin(Draggable);

export default function ScrollWheel() {
  //   const [width, height] = useState(0);

  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  const radius = 150,
    diameter = radius * 2,
    element = document.querySelector("#circular-text");

  //   element.style.width = `${diameter}px`;
  //   element.style.height = `${diameter}px`;
  //   element.style.backgroundColor = "#sdf";

  const textStyle = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    color: "red",
    // height: "20px",
  };

  useEffect(() => {
    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "rotation",
      onDragEnd() {
        console.log(this);
      },
    });
  }, []);

  return (
    <div>
      {/* <h2>React & GSAP Draggable</h2> */}

      <div className="draggable" ref={dragTarget}>
        <div id="circular-text" className="circular-text" style={{ textStyle }}>
          <div className="text-rays">
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">React</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">Javascript</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">Python</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">React Native</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">Java</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">PHP</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">C/C++</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">Linux</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">GraphQL</div>
            </div>
            <div className="ray">
              <MaterialIcon
                icon="circle"
                color="#D28CCF"
                size="35px"
                class="lang-dot"
              />
              <div className="lang">Git</div>
            </div>
          </div>
          {/* <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div> */}
        </div>
      </div>
    </div>
  );
}

render(<ScrollWheel />, document.getElementById("root"));
