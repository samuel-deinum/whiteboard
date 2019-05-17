import React from "react";
import "./BackDrop.css";
const backdrop = props => {
  return props.show ? <div className="Backdrop" onClick={props.click} /> : null;
};

export default backdrop;
