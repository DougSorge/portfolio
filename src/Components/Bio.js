import React from "react";
import classNames from "classnames";

export default function Bio(props) {
  let containerClasses = classNames({
    "button-container": true,
    "bio-container-closed": props.isOpen === false,
    "bio-container-open": props.isOpen === true,
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
          src="images/famAtDis.jpg"
          alt="img for projects button"
        />
        <h2 className={labelClasses}>Bio</h2>
      </div>
    </>
  );
}
