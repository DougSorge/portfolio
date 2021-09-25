import React, { useState } from "react";
import Container from "./Components/Container";
import MainButton from "./Components/MainButton";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Bio from "./Components/Bio";
import Header from "./Components/Header";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  let handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header />
      <MainButton handleClick={handleClick} />
      <Resume isOpen={isOpen} />
      <Projects isOpen={isOpen} />
      <Contact isOpen={isOpen} />
      <Bio isOpen={isOpen} />
    </Container>
  );
}

export default App;
