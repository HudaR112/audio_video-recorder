import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import RecordVideo from "./RecordVideo.js";
import Home from "./App.js";
import About from "./About.js"
import Contact from "./Contact.js"
import NavBar from "./NavBar.js";
import reportWebVitals from "./reportWebVitals";

export default function App1() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/record-video">
          <RecordVideo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App1 />, document.getElementById("root"));
