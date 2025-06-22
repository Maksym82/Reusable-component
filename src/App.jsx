import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instruction from "./components/instruction";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instruction showInstructions={showInstructions}/>

      <main className="component-showcase">
        <section className="component-group">
          <h2>Variants</h2>
          <div className="component-card">
            <button className="button primary">Primary</button>
            <button className="button secondary">Secondary</button>
            <button className="button danger">Danger</button>
            <button className="button gradient">Gradient</button>
            <button className="button outline">Outline</button>
          </div>
        </section>

        <section className="component-group">
          <h2>Sizes</h2>
          <div className="component-card">
            <button className="button small primary">Small</button>
            <button className="button medium primary">Medium</button>
            <button className="button large primary">Large</button>
          </div>
        </section>

        <section className="component-group">
          <h2>Button States</h2>
          <div className="component-card">
            <button className="button primary">Default</button>
            <button className="button primary disabled">Disabled</button>
          </div>
        </section>

        <section className="component-group">
          <h2>Full Width Button</h2>
          <div className="component-card">
            <button className="button secondary full-width">Full Width</button>
          </div>
        </section>
      </main>

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
