import React from "react";

import "./DrawToolButton.css";

const DrawToolButton = props => {
  let style = { background: props.color };

  return (
    <button
      className="DrawToolButton"
      style={style}
      onClick={() => props.click(props.color)}
    />
  );
};

export default DrawToolButton;
