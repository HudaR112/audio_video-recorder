import React from "react";
import contact from "./imgs/contactlib.jpg";
import "./Contact.css";
import NavBar from "./NavBar";

function Contact() {
  return (
    <div className="contact">
      {/* <NavBar /> */}
      <div className="leftSide" style={{backgroundImage: `url(${contact})` }}></div>
      <div className="rightSide">
        <h1> Contact Us </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Full Name" type="text" />
          <label htmlFor="number">Number</label>
          <input name="number" placeholder="Enter Number" type="number" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email" type="email" />
          <label htmlFor="message" className="inputMsg">Message</label>
          <textarea placeholder="Enter message" name="message" className="message" required></textarea>
          <button type="submit" className="btn-contact">Send Message</button>
        </form>
        </div>
        </div>
  );
}

export default Contact;