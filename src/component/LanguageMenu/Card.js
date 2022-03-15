import React from "react";

import Lang from "./Lang.js";
const language = [
  "React",
  "Javascript",
  "Python",
  "React Native",
  "Java",
  "C/C++",
  "Linux",
  "Git",
  "GraphQL",
  "SQL",
];

function get_coords(radian_interval, radius) {
  return {
    x: Math.cos(radian_interval) * radius,
    y: Math.sin(radian_interval) * radius,
  };
}

function Card(props) {
  let coord = get_coords(props.radian_interval, props.radius);
  return (
    <div
      style={{
        ...styles.card,
        left: `${props.center.x + coord.x}px`,
        top: `${props.center.y - coord.y}px`,
      }}
    >
      {/* <img
        src={`https://picsum.photos/${200 + parseInt(props.no)}`}
        style={{
          // width: "100%",
          // height: "100%",
          borderRadius: "50%",
          boxShadow: "10px 10px 8px black",
        }}
        alt="pic"
      /> */}
      <div
        style={{
          marginRight: "20px",
          width: "50px",
          // textAlign: "left",
          display: "flex",
          flexDireaction: "row",
        }}
      >
        {language[props.card_index]}
        {/* <div style={{ ...styles.dot }}></div> */}
      </div>
    </div>
  );
}

const styles = {
  card: {
    margin: "0",
    padding: "0",
    position: "absolute",
    top: "200%",
    left: "500%",
    transform: "translate( -50%, -50%) rotate(90deg)",
    height: "50px",
    width: "50px",
    // backgroundColor: "blue",
    borderRadius: "50%",
  },
  dot: {
    height: "50px",
    width: "50px",
    backgroundColor: "grey",
    marginLeft: "30px",
    borderRadius: "50%",
  },
};

export default Card;
