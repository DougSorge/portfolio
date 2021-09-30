import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ModalNav from "./ModalNav";

export default function ModalContent(props) {
  const [content, setContent] = useState(props.content);

  useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  let modalClasses = classNames({
    modal: true,
    "modal-scale-up": props.overlayStatus === true,
  });

  switch (content.id) {
    case "resume":
      return (
        <section className={modalClasses}>
          <div className="modal-content modal-content-resume">
            {/* <h1 className="modal-heading">{content.heading}</h1> */}
            <a href="images/resumeDL.pdf" download className="project-link">
              Download Resume PDF
            </a>
            <img className="resumeImg" src={content.img} alt="Dougs Resume" />
          </div>
          <ModalNav changeContent={props.changeContent} />
        </section>
      );

    case "bio":
      return (
        <section className={modalClasses}>
          <div className="modal-content modal-content-bio">
            <h1 className="modal-heading">{content.heading}</h1>
            <img className="familyImg" src={content.img} alt="Dougs Resume" />
            <div className="modal-content-bio-description">
              {content.description &&
                content.description.map((paragraph, index) => {
                  return (
                    <p className="bio-paragraph" key={index}>
                      {paragraph}
                    </p>
                  );
                })}
            </div>
          </div>
          <ModalNav changeContent={props.changeContent} />
        </section>
      );
    case "projects":
      return (
        <section className={modalClasses}>
          <div className="modal-content">
            <div className="projects-container">
              {content.projects &&
                content.projects.map((project, index) => {
                  return (
                    <div className="project" key={index}>
                      <h1 className="modal-heading">{project.title}</h1>
                      <p className="project-paragraph">{project.description}</p>
                      <a
                        className="project-link"
                        href={project.gitLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repo
                      </a>
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.link ? `Netlify Hosting` : ``}
                      </a>
                      <img
                        src={project.img}
                        alt="project-img"
                        className="project-img"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <ModalNav changeContent={props.changeContent} />
        </section>
      );
    case "contact":
      return (
        <section className={modalClasses}>
          <div className="modal-content modal-content-contact">
            <h1 className="modal-heading">{content.heading}</h1>
            <p className="contact-paragraph">
              Feel free to get in touch (preferrably by email) if you've got any
              quesitons, business ideas, criticism or just want to say hi!
            </p>
            {content.contacts &&
              content.contacts.map((contact) => {
                return (
                  <div className="contact-method">
                    <i className={contact.Icon}></i>
                    <a href={contact.URL}>{contact.name}</a>
                  </div>
                );
              })}
            <div className="contact-method">
              <i className={content.email.icon}></i>
              <a href="mailto:{content.email.emailAddress}">
                {content.email.emailAddress}
              </a>
            </div>
          </div>
          <ModalNav changeContent={props.changeContent} />
        </section>
      );
    default:
      return (
        <section className="modal">
          <div className="modal-content"></div>
          <div className="modal-buttons"></div>
        </section>
      );
  }
}
