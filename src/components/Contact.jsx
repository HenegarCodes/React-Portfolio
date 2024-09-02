import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'service_i13euly',  // Replace with your EmailJS service ID
      'template_7yc729g', // Replace with your EmailJS template ID
      templateParams,
      'EZ7ejCphMD8c7SdTs'      // Replace with your EmailJS user ID (or public key)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormSubmitted(true);
    }, (error) => {
      console.log('FAILED...', error);
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container" id="Contact">
      <br />
      <h2 id="contact-me" className="bib">Let's Connect!</h2>
      <br />
      {formSubmitted ? (
        <p className="success-message">Your message has been sent successfully!</p>
      ) : (
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {nameError && <p className="error-message">{nameError}</p>}
          </div>
          <div className="form-group">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <div className="txtA">
              <textarea
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
