import React from "react";
import classNames from "classnames";

export default function Contact(props) {
  let containerClasses = classNames({
    "button-container": true,
    "contact-container-closed": props.isOpen === false,
    "contact-container-open": props.isOpen === true,
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
          src="images/contact.jpg"
          alt="img for projects button"
        />
        <h2 className={labelClasses}>Contact</h2>
      </div>
    </>
  );
}
