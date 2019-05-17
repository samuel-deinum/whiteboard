import React from "react";
import Aux from "../../hoc/Auxillary";

const Instruction = props => {
  return (
    <Aux>
      <h2>Welcome To WhiteBoard!</h2>
      <h3>An Online WhiteBoard to help you Teach!</h3>
      <p>
        <b>DRAG</b> Images on to the white board. <br />
        <b>DOUBLE CLICK</b> on the image to the modify. <br />
        <b>DRAW</b> an image with various colors and <br />
        <b>ADD</b> it to the whiteboard. <br />
        <b>EXIT</b> the draw tool bar to modify your drawings.
      </p>
    </Aux>
  );
};

export default Instruction;
