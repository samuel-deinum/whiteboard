import React from "react";

import "./DrawTool.css";
import DrawToolButton from "./DrawToolButton/DrawToolButton";

const drawTool = props => {
  return (
    <div className="DrawToolOpen">
      <DrawToolButton color="black" click={props.switchColor} />
      <DrawToolButton color="blue" click={props.switchColor} />
      <DrawToolButton color="red" click={props.switchColor} />
      <DrawToolButton color="#5CEF42" click={props.switchColor} />
      <button
        className="DrawToolUndo"
        onClick={props.undo}
        style={{ marginLeft: "5%" }}
      >
        UNDO
      </button>
      <button className="DrawToolUndo" onClick={props.add}>
        ADD
      </button>
      <button className="DrawToolUndo" onClick={props.off}>
        EXIT
      </button>
    </div>
  );
};

export default drawTool;
