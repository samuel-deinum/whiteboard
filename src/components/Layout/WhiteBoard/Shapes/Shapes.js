import React from "react";

import Svgs from "../../../../assets/Svgs/Svgs";
import Aux from "../../../../hoc/Auxillary";

const shapes = props => {
  let shapes = props.shapes.map(s => {
    let hValue = props.svgs[s.type]["height"];
    let wValue = (hValue * props.svgs[s.type]["ar"] * props.ar.h) / props.ar.w;

    let xValue = (s.x / wValue) * 100;
    let yValue = (s.y / hValue) * 100;

    let transformValue =
      "translate3d(" +
      xValue +
      "%," +
      yValue +
      "%,0)  rotate(" +
      s.rotate +
      "deg) scale(" +
      s.scaleX +
      "," +
      s.scaleY +
      ")";

    let mStyle = {
      height: hValue + "%",
      width: wValue + "%",
      transform: transformValue,
      position: "absolute",
      visibility: s.display,
      pointerEvents: s.active
      //transition: "transform " + s.time + "s"
    };

    return (
      <div
        key={s.id}
        style={mStyle}
        onMouseDown={props.click.bind(this, s.id)}
        onMouseOver={() => props.mouseover(s.id)}
        onDoubleClick={() => props.doubleClick(s.id)}
      >
        <Svgs type={s.type} svgs={props.svgs} />
      </div>
    );
  });

  return <Aux>{shapes}</Aux>;
};

export default shapes;
