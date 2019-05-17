import React from "react";

import "./EraserButton.css";

const eraserButton = props => {
  let mClass = ["EraserButton"];

  if (props.eraserActive) {
    mClass.push("Pressed");
  }
  return (
    <button className={mClass.join("")} onClick={props.eraserClick}>
      Eraser
    </button>
  );
};

export default eraserButton;
