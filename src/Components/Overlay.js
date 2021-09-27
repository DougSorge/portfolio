import classNames from "classnames";
import React from "react";
import ModalContent from "./ModalContent";

export default function Overlay(props) {
  let overlayClasses = classNames({
    overlay: true,
    "overlay-animate-in": props.overlayStatus === true,
  });

  let closeModal = () => {
    document.querySelector(".overlay").classList.add("overlay-animate-out");
    setTimeout(() => {
      document
        .querySelector(".overlay")
        .classList.remove("overlay-animate-out");
      props.closeOverlay();
    }, 1300);
  };

  return (
    <section className={overlayClasses}>
      <span onClick={closeModal} className="close-icon">
        <img src="images/closeIcon.png" alt="close modal icon" />
      </span>

      <ModalContent
        overlayStatus={props.overlayStatus}
        content={props.content}
        changeContent={props.changeContent}
      />
    </section>
  );
}
