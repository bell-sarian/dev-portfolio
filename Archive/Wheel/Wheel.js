import React, { Component, useRef, useEffect } from "react";
import "./Wheel.css";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { deg: this.currentDeg };

    this.fullAngle = props.degrees;
    this.startAngle = 0;
    // this.startAngle = (360 - props.degrees) / 2;
    this.endAngle = 360;
    // this.endAngle = this.startAngle + props.degrees;
    this.margin = props.size * 0.15;
    this.currentDeg = Math.floor(
      this.convertRange(
        props.min,
        props.max,
        this.startAngle,
        this.endAngle,
        props.value
      )
    );
  }

  startDrag = (e) => {
    e.preventDefault();
    const knob = e.target.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e) => {
      this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
      if (this.currentDeg === this.startAngle) this.currentDeg--;
      let newValue = Math.floor(
        this.convertRange(
          this.startAngle,
          this.endAngle,
          this.props.min,
          this.props.max,
          this.currentDeg
        )
      );
      this.setState({ deg: this.currentDeg });
      this.props.onChange(newValue);
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", (e) => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  getDeg = (cX, cY, pts) => {
    const x = cX - pts.x;
    const y = cY - pts.y;
    let deg = (Math.atan(y / x) * 180) / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }
    let finalDeg = Math.min(Math.max(this.startAngle, deg), this.endAngle);
    console.log("deg", finalDeg);
    return finalDeg;
  };

  convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
    return (
      ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin
    );
  };

  dcpy = (o) => {
    return JSON.parse(JSON.stringify(o));
  };

  renderTicks = () => {
    let ticks = [];
    const incr = this.fullAngle / this.props.numTicks;
    const size = this.margin + this.props.size / 2;
    for (let deg = this.startAngle; deg <= this.endAngle; deg += incr) {
      const tick = {
        deg: deg,
        tickStyle: {
          height: size + 10,
          left: size - 1,
          top: size + 2,
          transform: "rotate(" + deg + "deg)",
          transformOrigin: "top",
          TextAlign: "right",
        },
        lang: "react",
      };
      ticks.push(tick);
    }
    return ticks;
  };

  render() {
    let kStyle = {
      width: this.props.size,
      height: this.props.size,
    };
    let iStyle = this.dcpy(kStyle);
    let oStyle = this.dcpy(kStyle);
    oStyle.margin = this.margin;
    // if (this.props.color) {
    //   oStyle.backgroundImage =
    //     "radial-gradient(100% 70%,hsl(290, " +
    //     this.currentDeg +
    //     "%, " +
    //     this.currentDeg / 5 +
    //     "%),hsl(" +
    //     Math.random() * 100 +
    //     ",20%," +
    //     this.currentDeg / 36 +
    //     "%))";
    // }
    iStyle.transform = "rotate(" + this.state.deg + "deg)";

    return (
      <div className="knob" style={kStyle}>
        <div className="ticks">
          {this.props.numTicks
            ? this.renderTicks().map((tick, i) => (
                <div
                  key={i}
                  className={
                    "tick" + (tick.deg <= this.currentDeg ? " active" : "")
                  }
                  style={tick.tickStyle}
                >
                  {/* <div className="language">{tick.lang}</div> */}
                </div>
              ))
            : null}
        </div>
        <div className="knob outer" style={oStyle} onMouseDown={this.startDrag}>
          <div className="knob inner" style={iStyle}>
            <div className="grip" />
          </div>
        </div>
      </div>
    );
  }
}

Wheel.defaultProps = {
  size: 150,
  min: 10,
  max: 30,
  numTicks: 0,
  degrees: 270,
  value: 0,
};

function Spin() {
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);
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
}
