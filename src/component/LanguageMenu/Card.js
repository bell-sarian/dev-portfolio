import React from "react";

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
      className="card"
      style={{
        ...styles.card,
        left: `${props.center.x + coord.x}px`,
        top: `${props.center.y - coord.y}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        "text-align": "right",
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
      {/* {/* {console.log("rad" + props.radius)} */}
      {console.log("radian interval: " + props.radian_interval)}
    </div>
  );
}

const styles = {
  card: {
    paddingRight: "250px",
    position: "absolute",
    top: "200%",
    right: "120%",
    transform: "translate( -50%, -50%) rotate(0deg)",
    height: "100px",
    width: "315px",
    borderRadius: "50%",
    overflow: "visible",
    fontSize: "50px",
    // "&:hover": {
    //   backgroundColor: "#efefef",
    // },
    // "&:last-child": {
    //   borderRight: "solid 1px #cccccc",
    // },
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
