import React from "react";

import "./NavBar.css";

const navBar = props => {
  return (
    <header className="NavBar">
      <div className="NavBarLogo">WHITEBOARD</div>
      <div className="NavBarIN" onClick={props.instruct}>
        INSTRUCTIONS
      </div>
    </header>
  );
};

export default navBar;
