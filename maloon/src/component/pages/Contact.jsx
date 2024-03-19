import React, { useState } from "react";
import "../style/contact.css";
import Footer from "../Footer";

function Contact() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Show the notification
    setShowNotification(true);

    // Reset the form after submission if needed
    e.target.reset();

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <section id="contact1">
        <h1 className="h-primary center">contact Us</h1>
        <div id="contact1-box1">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number: </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="contact1-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
      {showNotification && (
        <div className="notification">
          Thank you! Your response has been submitted.
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Contact;
