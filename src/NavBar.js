import React from "react";
import sound from "./imgs/sound.png";
import { Link } from "react-router-dom";

import "./App.css";

function NavBar() {
  return (
    <main>
      <header>
        <div>
          <div className="container">
            <Link to="/">
              <div className="logo">
                <img src={sound} alt="Logo" />
                <h3>NOICE•REDS</h3>
              </div>
            </Link>

            <div className="links">
              <ul>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Contact">Have a problem?</Link>
                </li>
                
                <li>
                <Link to="/About">
                  <button className="btn-aboutus" role="button">
                    About us</button></Link>
                </li>
              </ul>
            </div>

            <div className="overlay"></div>

            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

export default NavBar;
