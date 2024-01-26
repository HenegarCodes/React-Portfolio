
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "@fontsource/fira-code";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { Socialicons } from './components/Social.jsx';
import "./components/app.css";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Set to black
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 9,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#eeeee",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "star",
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );


  return (
    <div className="App">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="ParticlesContainer"
        />
      )}

      <div className="ContentWrapper">

        <Home />
        <Navbar />
        <Projects />
        <About />
        <Contact />
        <Socialicons />
      </div>
    </div>
  );
};

export default App;
