import React from "react";

import "./TimeLine.css";
import StateBox from "./StateBox/StateBox";

const timeLine = props => {
  let stateBoxs = props.timeLineArray.map((s, i) => {
    return (
      <StateBox
        key={s.id}
        select={s.id === props.timeLineSelect}
        click={() => props.timeLineBoxClick(s.id)}
      >
        {s.id}
      </StateBox>
    );
  });

  return <div className="TimeLine">{stateBoxs}</div>;
};

export default timeLine;
