

import React, { useEffect, useState } from "react";

import './Home.css';

const Home = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = ["Software Engineer", "Debugger", "Daily Developer", "Problem Creator & Solver"];
  const typeSpeed = 100; // Speed of typing (milliseconds per character)
  const pauseBeforeType = 3000; // Pause before typing the next phrase (milliseconds)
  const pauseAfterType = 3000; // Pause after typing a phrase (milliseconds)

  useEffect(() => {
    const typeAndBackspace = async () => {
      // Add a delay before starting the typewriter effect
      await delay(500);
  
      const currentPhrase = phrases[phraseIndex];
  
      // Type the current phrase
      for (let i = 0; i < currentPhrase.length; i++) {
        await delay(typeSpeed);
        setTypewriterText((prevText) => prevText + currentPhrase.charAt(i));
      }
  
      // Pause after typing
      await pause(pauseAfterType);
  
      // Backspace the current phrase
      for (let i = currentPhrase.length; i >= 0; i--) {
        await delay(typeSpeed);
        setTypewriterText((prevText) => prevText.slice(0, -1));
      }
  
      // Pause before typing the next phrase
      await pause(pauseBeforeType);
  
      // Move to the next phrase
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };
  
    // Start the typewriter effect
    typeAndBackspace();
  }, [phraseIndex]);
  
  const pause = (time) => new Promise(resolve => setTimeout(resolve, time));

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="text-section">
           <h1>Hi, I'm Spencer Henegar 👋🏻</h1>

      <p>{typewriterText}</p>
    </div>
  );
};

export default Home;
