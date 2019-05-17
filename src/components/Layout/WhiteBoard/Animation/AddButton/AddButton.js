import React from "react";

import "./AddButton.css";

const addButton = props => {
  return (
    <button className="AddButton" onClick={props.click}>
      ADD
    </button>
  );
};

export default addButton;
