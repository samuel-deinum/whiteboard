import React from "react";

import "./DrawBox.css";

const drawBox = props => {
  let polylines = props.polylines.map(p => {
    let style = {
      fill: "none",
      stroke: p.color,
      strokeWidth: "4"
    };
    return <polyline key={p.id} style={style} points={p.string} />;
  });

  return (
    <div
      className="DrawBox"
      onMouseDown={props.down}
      onMouseMove={props.move}
      onMouseUp={props.up}
    >
      <svg>{polylines}</svg>
    </div>
  );
};

export default drawBox;
