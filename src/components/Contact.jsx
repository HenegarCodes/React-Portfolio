import React, { useState } from "react";
import './contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

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
    // form submission logic
  };

  return (

    <div className="contact-container" id="Contact">
      <br />
      <h2 id="contact-me" className="bib">Lets Connect!</h2>
      <br />
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
    </div>
  );
};

export default Contact;
