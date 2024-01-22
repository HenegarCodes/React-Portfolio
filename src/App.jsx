import React from "react";
import Background from "./components/background.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';

const App = () => {
  return (
    <div className="App">
      <Background />
      <div className="overlay">
        <Home />
        <Navbar />
        <Projects />
      </div>
    </div>
  );
};

export default App;