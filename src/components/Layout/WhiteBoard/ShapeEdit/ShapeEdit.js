import React from "react";

import "./ShapeEdit.css";
const shapeEdit = props => {
  let height = 40;
  let width = ((height * props.ar.h) / props.ar.w) * 0.75;
  let xValue = ((props.shape.x - 1.2 * width) / width) * 100;
  let yValue = ((props.shape.y - 1.2 * height) / height) * 100;

  if (props.shape.x < 50) {
    xValue = ((props.shape.x + width / 2) / width) * 100;
  }
  if (props.shape.y < 50) {
    yValue = (props.shape.y / height) * 100;
  }

  let transformValue = "translate3d(" + xValue + "%," + yValue + "%,0)";

  let style = {
    height: "40%",
    width: ((40 * props.ar.h) / props.ar.w) * 0.75 + "%",
    transform: transformValue
  };

  return (
    <div className="ShapeEdit" style={style}>
      <div className="ShapeEditElement">
        <label>Scale</label>
        <input
          type="range"
          min="-100"
          max="100"
          className="Slider"
          value={
            props.shape.scaleX - 1 >= 0
              ? (props.shape.scaleX - 1) * 10
              : (props.shape.scaleX - 1) * 100
          }
          onChange={props.onChange.bind(this, "scale")}
        />
      </div>
      <div className="ShapeEditElement">
        <label>Scale X</label>
        <input
          type="range"
          min="-100"
          max="100"
          className="Slider"
          value={
            props.shape.scaleX - 1 >= 0
              ? (props.shape.scaleX - 1) * 10
              : (props.shape.scaleX - 1) * 100
          }
          onChange={props.onChange.bind(this, "scaleX")}
        />
      </div>
      <div className="ShapeEditElement">
        <label>Scale Y</label>
        <input
          type="range"
          min="-100"
          max="100"
          className="Slider"
          value={
            props.shape.scaleY - 1 >= 0
              ? (props.shape.scaleY - 1) * 10
              : (props.shape.scaleY - 1) * 100
          }
          onChange={props.onChange.bind(this, "scaleY")}
        />
      </div>
      <div className="ShapeEditElement">
        <label>Rotate</label>
        <input
          type="range"
          min="-360"
          max="360"
          className="Slider"
          value={props.shape.rotate}
          onChange={props.onChange.bind(this, "rotate")}
        />
      </div>
      <div className="ShapeEditElement">
        <button
          className="ShapeEditDelete"
          onClick={props.onChange.bind(this, "delete")}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default shapeEdit;
