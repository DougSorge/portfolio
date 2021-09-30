import React from "react";

export default function Container(props) {
  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url("images/bg.png")` }}
    >
      {props.children}

      <p className="site-description">
        This page was built using React and Sass |
        <a
          className="contact-link"
          href="https://github.com/DougSorge"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
