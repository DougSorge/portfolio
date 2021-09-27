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
          <div className="modal-content">
            <h1 className="modal-heading">{props.content.heading}</h1>
            <img
              className="resumeImg"
              src={props.content.img}
              alt="Dougs Resume"
            />
          </div>
          <ModalNav changeContent={props.changeContent} />
        </section>
      );

    case "bio":
      return (
        <section className={modalClasses}>
          <div className="modal-content">
            <h1 className="modal-heading">{props.content.heading}</h1>
            <img
              className="familyImg"
              src={props.content.img}
              alt="Dougs Resume"
            />
            {props.content.description &&
              props.content.description.map((paragraph, index) => {
                return (
                  <p className="bio-paragraph" key={index}>
                    {paragraph}
                  </p>
                );
              })}
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
