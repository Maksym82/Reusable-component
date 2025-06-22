import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instruction from "./components/instruction";
import Main from "./components/Main";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instruction showInstructions={showInstructions}/>
      <Main />
      

      <footer className="app-footer">
        <p>© 2024 UI Component Library. All rights reserved.</p>
        <div className="technologies-used">
          <strong>Technologies used:</strong> React, JSX, useState, Conditional
          Rendering, CSS Modules, Event Handling, Component Composition,
          Reusable Components.
        </div>
      </footer>
    </div>
  );
}


export default App;
