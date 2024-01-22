import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact_container" id="Contact">
      <div className="heading">
        <h2>get in touch</h2>
      </div>
      <div className="allContact">
        <div className="info">
          <h2>let's talk about everything!</h2>
          <h3>don't like forms? send me an message 👍</h3>
        </div>
        <form action="">
          <div className="small">
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="big">
            <input type="email" placeholder="Enter Your Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write Your Message"
          ></textarea>
        </form>
      </div>
      <h2 className="end">
        created by {`~>`} <span>mohamed aymen</span>
      </h2>
    </div>
  );
};

export default Contact;
