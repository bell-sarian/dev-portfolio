import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import Style from "./style/App.css";

import NavBar from "./component/Navigation/NavBar.js";
import Home from "./view/Home/Home.js";
import About from "./view/About/About.js";
import Work from "./view/Work/Work.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <NavBar></NavBar>
          <div id="home">
            <Home></Home>
          </div>
          <div id="about">
            <About></About>
          </div>
          <div id="work">
            <Work></Work>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
