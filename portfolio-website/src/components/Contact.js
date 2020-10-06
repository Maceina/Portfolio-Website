import "./Contact.css";
import React from "react";
import emailjs from "emailjs-com";
import apiKeys from "./apikeys";
import gitlogo from "../images/github.svg";
import linkeinlogo from "../images/linkedin.png";

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
        <div className="mainForm">
      <form className="form" onSubmit={onSubmit}>
        <p>Your Name:</p>
        <input
          name="name"
          type="text"
          placeholder="Name…"
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
        <div className="formButton">
        <button className="sendButton" type="submit">Send Message</button>
        </div>
      </form>
      <div className="links">
        <div>
        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">
          <img className="linked" src={linkeinlogo} alt="LinkeIn"/>
          </a>
        </div>
        <img className="git" src={gitlogo} alt="Github"/>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Contact;
