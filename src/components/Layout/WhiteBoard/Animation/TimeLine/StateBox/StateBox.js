import React from "react";

import "./StateBox.css";

const stateBox = props => {
  let style = {};

  if (props.select) {
    style = { background: "#F3E50D" };
  }

  return (
    <div className="StateBox" style={style} onClick={props.click}>
      {props.children}
    </div>
  );
};

export default stateBox;
