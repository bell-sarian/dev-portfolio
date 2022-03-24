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
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        // flexDireaction: "row",
        // justifyContent: "left",
      }}
    >
      <div
        style={{
          marginRight: "20px",
          // width: "500px",
          // textAlign: "left",
        }}
      >
        {language[props.card_index]}
      </div>
      <div style={{ ...styles.dot }}></div>
      {console.log("rad" + props.radius)}
      {console.log("id" + props.id)}
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
    width: "300px",
    // backgroundColor: "blue",
    borderRadius: "50%",
    // display: "flex",
    // border: "1px solid red",
    overflow: "visible",
    fontSize: "30px",
  },
  dot: {
    height: "20px",
    width: "20px",
    backgroundColor: "#D28CCF",
    // marginLeft: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
};

export default Card;
