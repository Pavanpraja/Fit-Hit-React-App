import React from "react";
import Navbar from "../navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section>
        <div className="contact-section" id="contact">
          <div className="h">
            <h1>Contact Us</h1>
            <div className="contact-container">
              <form action="#">
                <input type="text" placeholder="Name" required />
                <br />
                <input type="number" placeholder="Phone Number" required />
                <br /> <input type="email" placeholder="Email id" required />
                <br />
                <textarea
                  name="texta"
                  id="texta"
                  cols="30"
                  rows="10"
                  placeholder="How about you..."
                ></textarea>
                <button type="submit" className="sbtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
