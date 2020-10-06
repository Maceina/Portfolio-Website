import "./Contact.css";
import React from "react";
import emailjs from "emailjs-com";
import apiKeys from "./apikeys";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(
        "service_jzno1gd",
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occured, Plese try again", error.text);
        }
      );
  };

  return (
    <div className="contactStyle">
      <h1 className="cont">Get in touch</h1>
      <div className="formField">
      <form className="form" onSubmit={onSubmit}>
        <p>Your Name:</p>
        <input
          name="name"
          type="text"
          placeholder="name…"
          className="form__input"
        />
        <p>Subject:</p>
        <input
          name="subject"
          type="text"
          placeholder="Subject…"
          className="form__input"
        />
        <p>Your Message:</p>
        <textarea
          name="message"
          type="text"
          placeholder="Your Message…"
          className="form__input-message"
        ></textarea>
        <button className="sendButton" type="submit">Send Message</button>
      </form>
      </div>
    </div>
  );
};
export default Contact;
