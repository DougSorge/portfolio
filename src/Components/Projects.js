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

  return (
    <>
      <div className={containerClasses}>
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
