import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instruction from "./components/instruction";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Button from "./components/Button";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  function handleClick() {
    alert("Click");
  }

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instruction showInstructions={showInstructions}/>
      <Main>
        <Section></Section>
        <Section>
          <Button onClick={handleClick} isDisabled>Some Text</Button>
          <Button onClick={handleClick} fullWidth>Some Text 2</Button>
          <Button variant="secondary">Some Text 3</Button>
          <Button variant="secondary" size="large">Some Text 4</Button>
        </Section>
        <Section>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        </Section>
        <Section>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </Section>
      </Main>
      <Footer />
    </div>
  );
} 

export default App;
