import React, { Component, useState, useEffect, useRef } from "react";
import Card from "./Card.js";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import "./LanguageMenu.css";

gsap.registerPlugin(Draggable);

export default function LanguageMenu() {
  const [radius, setRadius] = useState(450);
  const [cards, setCards] = useState([]);
  const [theta, setTheta] = useState(0.0);
  const [snapPoint, setSnapPoint] = useState({ x: null, y: null });
  const [snapInProgress, setSnapInProgress] = useState(false);
  const [childrenLoaded, setChildrenLoaded] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const dragInstance = useRef(null);
  const dragTarget = useRef(null);
  let temp_theta = 0.0;
  let anim_id = null;

  var previousRotation = 0;
  var cardPreviousRotation = 0;

  const gaussFunc = (x, sigma, mu) => {
    return (
      (1 / sigma / Math.sqrt(2.0 * Math.PI)) *
      Math.exp((-1.0 / 2.0) * Math.pow((x - mu) / sigma, 2))
    );
  };
  const myGaussFunc = (x) => gaussFunc(x, 1 / 2 / Math.sqrt(2 * Math.PI), 0);

  useEffect(() => {
    let center_of_wheel = {
      x: parseFloat(styles.wheel.width) / 2,
      y: parseFloat(styles.wheel.height) / 2,
    };
    let temp_cards = [];

    for (let i = 0; i < 10; i++) {
      temp_cards.push(
        <Card
          id={"card-" + i}
          radius={radius}
          radian_interval={(Math.PI / 5) * i}
          center={center_of_wheel}
          key={`card_${i}`}
          card_index={i}
          amLoaded={childrenLoaded}
        />
      );

      setCards(temp_cards);
      console.log("temp cards" + temp_cards[0]);

      Draggable.create(dragTarget.current, {
        type: "rotation",

        liveSnap: true,
        throwProps: true,
        dragResistance: 0.35,
        edgeResistance: 0.8,

        onDrag: handle_rotate,
        onDragEnd() {
          console.log(this);
        },
      });
    }
  }, []);

  const handle_rotate = (event) => {
    clearTimeout(anim_id);
    const wheelStyle = document.querySelector(".draggable");

    var yourDraggable = Draggable.get(dragTarget.current);

    temp_theta += 2;
    var direction =
      yourDraggable.rotation - previousRotation > 0
        ? "clockwise"
        : "couter-clockwise";
    // console.log("styles " + styles.wheel.backgroundColor);

    console.log(
      "Direction: " + direction + ", angle: " + yourDraggable.rotation
    );

    wheelStyle.style.transitionDelay = "0.0s";
    wheelStyle.style.transitionDuration = "0.0s";
    // wheelStyle.style.transform = `translate(-50%, -50%) rotate(${temp_theta}deg)`;

    previousRotation = yourDraggable.rotation;

    for (let i = 0; i < wheelStyle.children.length; i++) {
      let id = "card-" + i;
      const card = document.getElementById(id);
      console.log("chew " + wheelStyle.children[i].radian_interval);
      wheelStyle.children[i].style.transitionDelay = "0.0s";
      wheelStyle.children[i].style.transitionDuration = "0.0s";
      wheelStyle.children[i].style.transform = `translate(-50%, -50%) rotate(${
        -1.0 * previousRotation
      }deg)`;

      // if (i == 5 && previousRotation / 360 <= 0) {
      //   wheelStyle.children[i].style.fontSize = "20px";
      // } else {
      //   wheelStyle.children[i].style.fontSize = "50px";
      // }
    }

    anim_id = setTimeout(() => {
      setTheta(temp_theta);
    }, 150);
  };

  return (
    <div className="draggable-container">
      <div
        className="draggable"
        onDrag={handle_rotate}
        ref={dragTarget}
        style={styles.wheel}
      >
        {cards}
      </div>
      <div className="gradient-menu-square"></div>
    </div>
  );
}

const styles = {
  wheel: {
    position: "absolute",
    top: "68%",
    right: "-900px",
    transform: "translate( -50%, -50%) rotate(0deg)",
    height: "870px",
    width: "870px",
    // backgroundColor: "blue",

    transition: "transform 330ms, ease-in-out",
    border: "6px solid #EFEFEF",
    // borderImage: "linear-gradient(to right, #EFEFEF, #131313) 1",

    borderRadius: "50%",
    // overflowY: "hidden",
    scrollbarWidth: "none",
    zIndex: "0",
  },
};
