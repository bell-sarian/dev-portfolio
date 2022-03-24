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

      var rotationSnap = 100;
      dragInstance.current = Draggable.create(dragTarget.current, {
        type: "rotation",
        // inertia: true,
        // eslint-disable-next-line no-loop-func
        // throwProps: true,
        liveSnap: true,
        // bounds: {
        //   minRotation: 0,
        //   maxRotation: 316.8,
        // },
        dragResistance: 0.35,
        edgeResistance: 0.8,
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
    temp_theta += 2;
    // temp_theta += scroll_speed;

    // console.log("styles " + styles.wheel.backgroundColor);
    const wheelStyle = document.querySelector(".draggable");
    //  card = null;

    wheelStyle.style.transitionDelay = "0.0s";
    wheelStyle.style.transitionDuration = "0.0s";
    wheelStyle.style.transform = `translate(-50%, -50%) rotate(${temp_theta}deg)`;

    for (let i = 0; i < wheelStyle.children.length; i++) {
      let id = "card-" + i;
      const card = document.getElementById(id);
      console.log("chew " + wheelStyle.children[i].color);
      wheelStyle.children[i].style.transitionDelay = "0.0s";
      wheelStyle.children[i].style.transitionDuration = "0.0s";
      wheelStyle.children[i].style.transform = `translate(-50%, -50%) rotate(${
        -1.0 * temp_theta
      }deg)`;
      console.log(
        "child rad " + wheelStyle.children[i].radius + "\n rad " + radius
      );
      // if (card.radius == radius) {
      //   wheelStyle.children[i].style.fontSize = "14px";
      // }

      // console.log("reached " + wheelStyle.children[i].rotation);
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
    top: "73%",
    right: "-650px",
    transform: "translate( -50%, -50%) rotate(-90deg)",
    height: "640px",
    width: "640px",
    // backgroundColor: "blue",

    transition: "transform 330ms, ease-in-out",
    border: "6px solid #EFEFEF",
    // borderImage: "linear-gradient(to right, #EFEFEF, #131313) 1",

    borderRadius: "1000px",
    // overflowY: "hidden",
  },
};
