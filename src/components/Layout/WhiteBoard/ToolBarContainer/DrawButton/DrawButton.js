import React from "react";

import "./DrawButton.css";

const drawButton = props => {
  return (
    <button className="DrawButton" onClick={props.drawTool}>
      Draw
    </button>
  );
};

export default drawButton;
