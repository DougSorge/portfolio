import React, { useState } from "react";
import classNames from "classnames";

export default function OpenButton(props) {
  const [isAnimated, setIsAnimated] = useState(null);

  let buttonAnimate = classNames({
    button: true,
    "main-button": true,
    "main-button-animate-open": isAnimated === true,
    "main-button-animate-close": isAnimated === false,
  });

  let labelClasses = classNames({
    "button-label": true,
    "button-label-closed": props.isOpen === false,
    "button-label-open": props.isOpen === true,
    "center-label": true,
    hide: isAnimated === true,
  });

  function clicked() {
    props.handleClick();
    setIsAnimated(!isAnimated);
  }

  return (
    <>
      <img
        className={buttonAnimate}
        onClick={clicked}
        src="/images/meAndAdam.jpg"
        alt="Me and my son Adam"
      />
      <h2 className={labelClasses}>Click Me</h2>
    </>
  );
}
