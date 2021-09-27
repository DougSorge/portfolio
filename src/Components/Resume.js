import React from "react";
import classNames from "classnames";

export default function Resume(props) {
  let containerClasses = classNames({
    "button-container": true,
    "resume-container-closed": props.isOpen === false,
    "resume-container-open": props.isOpen === true,
  });

  let labelClasses = classNames({
    "button-label": true,
    "button-label-closed": props.isOpen === false,
    "button-label-open": props.isOpen === true,
  });

  const resumeContent = {
    id: "resume",
    heading: "My Resume",
    img: "images/myResume.png",
  };

  let handleClick = () => {
    props.getContent(resumeContent);
    props.overlay(true);
  };

  return (
    <div
      className={containerClasses}
      onClick={() => {
        handleClick();
      }}
    >
      <img
        className="button glow-light"
        src="images/resume.jpg"
        alt="img for projects button"
      />
      <h2 className={labelClasses}>Resume</h2>
    </div>
  );
}
