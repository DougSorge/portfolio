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

  function clicked() {
    props.handleClick();
    setIsAnimated(!isAnimated);
  }

  return (
    <>
      <img
        class={buttonAnimate}
        src="/images/meAndAdam.jpg"
        alt="Me and my son Adam"
        onClick={clicked}
      />
    </>
  );
}
