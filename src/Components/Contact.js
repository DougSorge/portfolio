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

  let handleClick = () => {
    props.getContent(contactContent);
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
          src="images/contact.jpg"
          alt="img for contact button"
        />
        <h2 className={labelClasses}>Contact</h2>
      </div>
    </>
  );
}
