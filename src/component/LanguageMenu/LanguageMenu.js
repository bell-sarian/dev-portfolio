import React, { Component, useState, useEffect, useRef } from "react";
import Card from "./Card.js";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

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

  useEffect(() => {
    let center_of_wheel = {
      x: parseFloat(styles.wheel.width) / 2,
      y: parseFloat(styles.wheel.height) / 2,
    };
    let temp_cards = [];

    for (let i = 0; i < 12; i++) {
      temp_cards.push(
        <Card
          radius={radius}
          radian_interval={(Math.PI / 5) * i}
          center={center_of_wheel}
          key={`card_${i}`}
          card_index={i}
        />
      );

      setCards(temp_cards);
      console.log("temp cards" + temp_cards[0]);

      var rotationSnap = 30;
      dragInstance.current = Draggable.create(dragTarget.current, {
        type: "rotation",
        inertia: true,
        // eslint-disable-next-line no-loop-func
        liveSnap: true,
        snap(endValue) {
          return Math.round((endValue / rotationSnap) * rotationSnap);
        },
        onDrag: handle_rotate,
        onDragEnd() {
          console.log(this);
        },
      });
    }
  }, []);

  const handle_rotate = (event) => {
    clearTimeout(anim_id);
    let scroll_speed = (event.deltaY / 360) * 20;
    temp_theta += 30;
    // temp_theta += scroll_speed;

    console.log("styles " + styles.wheel.backgroundColor);
    const wheelStyle = document.querySelector(".draggable");

    wheelStyle.style.transitionDelay = "0.0s";
    wheelStyle.style.transitionDuration = "0.0s";
    wheelStyle.style.transform = `translate(-50%, -50%) rotate(${temp_theta}deg)`;

    for (let i = 0; i < wheelStyle.children.length; i++) {
      console.log("chew " + wheelStyle.children[i].color);
      wheelStyle.children[i].style.transitionDelay = "0.0s";
      wheelStyle.children[i].style.transitionDuration = "0.0s";
      wheelStyle.children[i].style.transform = `translate(-50%, -50%) rotate(${
        -1.0 * temp_theta
      }deg)`;
      console.log("reached" + wheelStyle.children[i]);
    }

    anim_id = setTimeout(() => {
      setTheta(temp_theta);
    }, 150);
  };

  return (
    <div
      className="draggable"
      onDrag={handle_rotate}
      ref={dragTarget}
      style={styles.wheel}
    >
      {cards}
    </div>
  );
}

const styles = {
  wheel: {
    position: "absolute",
    top: "75%",
    right: "5%",
    transform: "translate( -50%, -50%) rotate(-90deg)",
    height: "100px",
    width: "100px",
    backgroundColor: "red",
    borderRadius: "50px",
  },
};
