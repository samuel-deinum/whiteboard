import React from "react";

import "./ToolBarContainer.css";
import ShapesBox from "./ShapesBox/ShapesBox";
import DrawButton from "./DrawButton/DrawButton";
import EraserButton from "./EraserButton/EraserButton";

const toolBarContainer = props => {
  let mClass = ["ToolBarContainer"];

  if (props.toolBarClosed) {
    mClass.push("Close");
  } else {
    mClass.push("Open");
  }

  return (
    <div className={mClass.join("")}>
      <ShapesBox svgs={props.svgs} insertShape={props.insertShape} />
      <EraserButton
        eraserClick={props.eraserClick}
        eraserActive={props.eraserActive}
      />
      <DrawButton drawTool={props.drawTool} />
    </div>
  );
};

export default toolBarContainer;
