import * as React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import NavBar from "./NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Work from "../Work/Work";

export const HashLinkPage = () => {
  return (
    <div>
      <NavBar />
      <section style={{ backgroundColor: "#F0F0F0" }} id="section-one">
        <Home />
      </section>
      <section style={{ backgroundColor: "#E0E0E0" }} id="section-two">
        <About />
      </section>
      <section style={{ backgroundColor: "#D0D0D0" }} id="section-three">
        <Work />
      </section>
    </div>
  );
};
