import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Style from "./style/App.css";

import NavBar from "./component/Navigation/NavBar.js";
import Home from "./component/Home/Home.js";
import About from "./component/About/About.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="appContainer">
          <NavBar></NavBar>
          <Home></Home>
          <About></About>
        </div>
      </div>
    );
  }
}

export default App;
