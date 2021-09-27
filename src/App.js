import React, { useState } from "react";
import Container from "./Components/Container";
import Overlay from "./Components/Overlay";
import MainButton from "./Components/MainButton";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Bio from "./Components/Bio";
import Header from "./Components/Header";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayStatus, setOverlayStatus] = useState(false);
  const [content, setContent] = useState({});

  let handleClick = () => {
    setIsOpen(!isOpen);
  };

  let getOverlayStatus = (status) => {
    setOverlayStatus(status);
  };

  let closeOverlay = () => {
    setOverlayStatus(false);
  };

  let changeContent = (content) => {
    setContent(content);
  };

  return (
    <Container>
      <Header />
      <Overlay
        overlayStatus={overlayStatus}
        closeOverlay={closeOverlay}
        content={content}
        changeContent={changeContent}
      />
      <MainButton handleClick={handleClick} />
      <Resume
        isOpen={isOpen}
        overlay={getOverlayStatus}
        getContent={changeContent}
      />
      <Projects isOpen={isOpen} overlay={getOverlayStatus} />
      <Contact isOpen={isOpen} overlay={getOverlayStatus} />
      <Bio
        isOpen={isOpen}
        overlay={getOverlayStatus}
        getContent={changeContent}
      />
    </Container>
  );
}

export default App;
