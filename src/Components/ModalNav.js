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
      "Thanks for checking out my portfolio! My name is Douglas Sorge and I'm a 30 year old Front End Web Developer. I've been self learning since 2018 and completed NuCamp's Front End Development BootCamp in Fall of 2021.",
      "I live with my Fiance, Jennifer, our 2 year old Son Adam (who is completely blind) and our 2 cats, Poopy and Chloe.",
      "Being a special needs father has taught me A LOT of lessons and spurred tremendous personal growth. Life and health are precious, precarious things. We need to treat our lives like the very temporary miracles that they are.",
      "Having learned those lessons, I dedicated myself to following my passion of programming. I started off with C++ in college and transisitonend into the wide world of web development. The web is my art, the editor is my canvas, stack overflow is my cruel mentor (only sort of kidding).",
      "I'm well versed in the 'Big Three' web development technologies of HTML/CSS/JavaScript. I've learned various frameworks to compliment those languages such as React.JS and Bootstrap as well as project specific technologies like Sanity.IO and GROQ.",
      "I have worked in many different industries including Food Services, Retail, Construction and Finance. Along the way I've learned how to lead, how to learn and how to get things done. I can also spin you a perfect pizza should the need arise.",
      "I'm ready to add to your project with meaningful, integral contributions. Feel free to contact me for any and all business inquries.",
    ],
  };

  const projectsContent = {
    id: "projects",
    heading: "My Projects",
    projects: [
      {
        title: "Headless CMS Blog",
        link: "https://dougsawesomeblog.netlify.app/",
        gitLink: "https://github.com/DougSorge/blogTemplate",
        img: "images/blogProjectScreenShot.png",
      },
      {
        title: "Live Weather Dashboard",
        link: "https://dougsawesomeweatherapp.netlify.app",
        gitLink: "https://github.com/DougSorge/weatherAppv2",
        img: "images/weatherAppScreenShot.png",
      },
    ],
  };

  const contactContent = {
    id: "contact",
    heading: "Contact Info",
    contacts: [
      {
        URL: `https://twitter.com/SorgeForge`,
        Icon: "fab fa-twitter",
        name: `@SorgeForge on Twitter`,
      },
      {
        URL: "https://www.linkedin.com/in/douglassorge/",
        Icon: "fab fa-linkedin-in",
        name: "Douglas Sorge on Linked in",
      },
    ],
    email: {
      emailAddress: "sorge.douglas@gmail.com",
      icon: `far fa-envelope`,
    },
  };

  const handleResumeClick = (content) => {
    props.changeContent(content);
  };

  const handleBioClick = (content) => {
    props.changeContent(content);
  };

  const handleProjectsClick = (content) => {
    props.changeContent(content);
  };

  const handleContactClick = (content) => {
    props.changeContent(content);
  };

  return (
    <div className="modal-button-section">
      <p
        className="button-label"
        onClick={() => {
          handleResumeClick(resumeContent);
        }}
      >
        Resume
      </p>
      <p
        className="button-label"
        onClick={() => {
          handleProjectsClick(projectsContent);
        }}
      >
        Projects
      </p>

      <p
        className="button-label nav-button"
        onClick={() => {
          handleBioClick(bioContent);
        }}
      >
        Bio
      </p>

      <p
        className="button-label"
        onClick={() => {
          handleContactClick(contactContent);
        }}
      >
        Contact
      </p>
    </div>
  );
}
