import React from "react";

export default function Container(props) {
  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url("images/bg.png")` }}
    >
      {props.children}
    </div>
  );
}
