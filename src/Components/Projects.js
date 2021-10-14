import React from "react";
import classNames from "classnames";

export default function Projects(props) {
  let containerClasses = classNames({
    "button-container": true,
    "projects-container-closed": props.isOpen === false,
    "projects-container-open": props.isOpen === true,
  });

  let labelClasses = classNames({
    "button-label": true,
    "button-label-closed": props.isOpen === false,
    "button-label-open": props.isOpen === true,
  });

  const projectsContent = {
    id: "projects",
    heading: "My Projects",
    projects: [
      {
        title: "Headless CMS Blog",
        description: "Built with React and Sanity IO",
        link: "https://dougsawesomeblog.netlify.app/",
        gitLink: "https://github.com/DougSorge/blogTemplate",
        img: "images/blogProjectScreenShot.png",
      },
    ],
  };

  let handleClick = () => {
    props.getContent(projectsContent);
    props.overlay(true);
  };

  return (
    <>
      <div
        className={containerClasses}
        onClick={() => {
          handleClick();
        }}
      >
        <img
          className="button glow-light"
          src="images/projectsBtn.jpg"
          alt="img for projects button"
        />
        <h2 className={labelClasses}>Projects</h2>
      </div>
    </>
  );
}
