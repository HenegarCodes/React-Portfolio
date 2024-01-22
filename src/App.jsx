import React from "react";
import Background from "./components/background.jsx";
import Navbar from "./components/Navbar.jsx";

export const App = () => {
  return (
    <div className="App">
      <Background />
      <div><Navbar /></div>
    </div>
    
  );
};

export default App;