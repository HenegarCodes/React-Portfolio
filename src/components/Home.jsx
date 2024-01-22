// Home.jsx
import React, { useEffect, useState } from "react";
import './Home.css';

const Home = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const phrases = ["Software Engineer", "Debugger", "Daily Developer", "Analyst"];
  const typeSpeed = 100; // Speed of typing (milliseconds per character)
  const pauseBeforeType = 3000; // Pause before typing the next phrase (milliseconds)
  const pauseAfterType = 3000; // Pause after typing a phrase (milliseconds)

  useEffect(() => {
    const typePhrases = async () => {
      while (true) {
        for (const phrase of phrases) {
          await typeOut(phrase);
          await pause(pauseAfterType);
          await backspace();
          await pause(pauseBeforeType);
        }
      }
    };

    typePhrases();
  }, []);

  const typeOut = async (text) => {
    for (let i = 0; i < text.length; i++) {
      await delay(typeSpeed);
      setTypewriterText((prevText) => prevText + text.charAt(i));
    }
  };

  const backspace = async () => {
    for (let i = typewriterText.length; i >= 0; i--) {
      await delay(typeSpeed);
      setTypewriterText((prevText) => prevText.slice(0, -1));
    }
  };

  const pause = (time) => new Promise(resolve => setTimeout(resolve, time));

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="text-section">
      <h1>Hi, I'm Spencer Henegar</h1>
      <p>{typewriterText}</p>
    </div>
  );
};

export default Home;
