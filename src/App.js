import React from "react";
import "./App.css";
import sound from "./imgs/sound.png";
import shape from "./imgs/shape.png";
import { Row, Col, Button } from "reactstrap";
import Record from "./Record";
import Upload from "./Upload";
import NavBar from "./NavBar";
import {Link } from "react-router-dom";
import { withRouter } from "react-router";

function Home() {
  return (
    <main>
      <div className="big-wrapper light">
        <img src={shape} alt="shape Image" className="shape" />
        <NavBar />
        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="big-title">
                <h1>Remove Background Noise from your Videos</h1>
              </div>
              <p className="text">
                Our AI algoritm will remove any type of background noise from your videos with a single click. Here's Proof!
              </p>
              <Row>
                <Col md="4">
                  <Upload />
                </Col>
                <Link to="/record-video">
                  <Button className="btn-recordvideo">Record Video</Button>
                </Link>
                <Col md="4">
                  <Record />
                </Col>
              </Row>
            </div>
            <div className="right">
              <img src={sound} alt="Person Image" className="person" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default withRouter(Home);
