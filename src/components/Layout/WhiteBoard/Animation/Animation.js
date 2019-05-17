import React from "react";

import "./Animation.css";
import TimeLine from "./TimeLine/TimeLine";
import OpenCloseButton from "./OpenCloseButton/OpenCloseButton";
import ElementTimeLine from "./ElementTimeLine/ElementTimeLine";
import AddButton from "./AddButton/AddButton";

const animation = props => {
  let classes = ["Animation"];

  if (props.open) {
    classes.push("Open");
  }

  return (
    <div className={classes.join("")}>
      <TimeLine
        timeLineArray={props.timeLineArray}
        timeLineSelect={props.timeLineSelect}
        timeLineBoxClick={props.timeLineBoxClick}
      />
      <AddButton click={props.timeLineClick} />
      <ElementTimeLine />
      <AddButton />
      <OpenCloseButton ocButton={props.ocButton} />
    </div>
  );
};

export default animation;
