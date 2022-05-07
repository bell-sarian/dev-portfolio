import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import Style from "./style/App.css";

import NavBar from "./component/Navigation/NavBar.js";
import Home from "./component/Home/Home.js";
import About from "./component/About/About.js";
import Work from "./component/Work/Work.js";

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
