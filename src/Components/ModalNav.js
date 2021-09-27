import React from "react";

export default function ModalNav(props) {
  const resumeContent = {
    id: "resume",
    heading: "My Resume",
    img: "images/myResume.png",
  };

  const bioContent = {
    id: "bio",
    heading: "About me",
    img: "images/famAtDis.jpg",
    description: [
      "Thanks for checking out my portfolio! My name is Douglas Sorge and I'm a 30 year old Front End Web Developer.",
      "I live with my Fiance, Jennifer, our 2 year old Son Adam (who happens to be completely blind) and our 2 cats, Poopy and Chloe.",
      "Being a special needs father has taught me A LOT of lessons  and spurred tremendous personal grotwth. Life and health are precious, precarious things. We need to treat our lives like the very temporary miracles that they are.",
      "I have worked in many different industries including Food Services, Retail, Construction and Finance. I love interracting with customers and I'm quite good at it. I hope to bring that talent and passion (along with my technical abilitiy) to the World of Web.",
      "As far as hobbies go I love to play darts, ride bike trails, play video games and write stories.",
    ],
  };

  const handleResumeClick = (content) => {
    props.changeContent(content);
  };

  const handleBioClick = (content) => {
    props.changeContent(content);
  };

  return (
    <div className="modal-button-section">
      <p
        className="button-label nav-button"
        onClick={() => {
          handleResumeClick(resumeContent);
        }}
      >
        Resume
      </p>
      <p className="button-label">Projects</p>

      <p
        className="button-label nav-button"
        onClick={() => {
          handleBioClick(bioContent);
        }}
      >
        Bio
      </p>

      <p className="button-label">Contact</p>
    </div>
  );
}
