import React, { useRef, useCallback, useState, Component } from "react";
import Circle from "./Circle";
import Lang from "./Lang";

const gaussFunc = (x, sigma, mu) => {
  return (
    (1 / sigma / Math.sqrt(2.0 * Math.PI)) *
    Math.exp((-1.0 / 2.0) * Math.pow((x - mu) / sigma, 2))
  );
};

const myGaussFunc = (x) => gaussFunc(x, 1 / 2 / Math.sqrt(2 * Math.PI), 0);

function withFunction(callback) {
  let inputRange = [],
    outputRange = [],
    steps = 12;

  // input range 0-1

  for (let i = 0; i <= steps; ++i) {
    let key = i / steps;
    inputRange.push(key);
    inputRange.push(callback(key));
  }

  return { inputRange, outputRange };
}

export default class RadialMenu extends Component {
  constructor(props) {
    super(props);

    const deltaTheta = 360 / Lang.length;
    const pxPerDeg = 200 / 120;

    const thetas = [];

    for (const i in Lang) {
      let val = i * deltaTheta * pxPerDeg;

      if (i >= 9) {
        val = -(Lang.length - i) * deltaTheta * pxPerDeg;
      }
    }

    this.state = {
      deltaTheta,
      Radius: 0,
      radius: 25,
      container: { height: 0, width: 0 },
      deltaAnim: 0,
      thetas,
      thetasAnim: thetas.map((theta) => theta),
    };
  }

  offset = () => parseInt(this.state.container.width / 3) - this.state.radius;

  // _panResponder = PanResponder.create

  // getIthCircleValue = (dx, deltaAnim) => {
  //   const selectedCircle = Math.round(())
  // }

  redner() {
    return (
      <dev>
        {Lang.map((language, index) => {
          let i = index;

          return (
            <Circle>
              <div>{index}</div>
            </Circle>
          );
        })}
      </dev>
    );
  }
}

// {
//   componentDidMount() {
//     console.log($(".name"));
//   }
//   render() {
//     return (
//       <div>
//         <input className="name" value="bells name"></input>
//       </div>
//     );
//   }
// }
