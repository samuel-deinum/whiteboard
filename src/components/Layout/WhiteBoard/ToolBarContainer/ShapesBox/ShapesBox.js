import React from "react";

import "./ShapesBox.css";
import Svgs from "../../../../../assets/Svgs/Svgs";

const ShapesBox = props => {
  let shapes = Object.keys(props.svgs).map(i => {
    return (
      <div
        className="shapeBox"
        key={i}
        onMouseDown={props.insertShape.bind(this, i)}
      >
        <Svgs type={i} svgs={props.svgs} />
      </div>
    );
  });

  return <div className="ShapesBox">{shapes}</div>;
};

export default ShapesBox;
