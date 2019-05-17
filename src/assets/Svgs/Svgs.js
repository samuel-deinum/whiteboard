import React from "react";

const svgs = props => {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox={
        "0 0 " +
        props.svgs[props.type]["viewHeight"] * props.svgs[props.type]["ar"] +
        " " +
        props.svgs[props.type]["viewHeight"]
      }
      style={{ pointerEvent: "auto" }}
    >
      {Object.keys(props.svgs[props.type]["elements"]).map(Key => {
        let CustomTag = Key.slice(0, Key.length - 1);
        while(/\d/.test(CustomTag)){
          CustomTag = CustomTag.slice(0, CustomTag.length - 1);
        }
        return (
          <CustomTag {...props.svgs[props.type]["elements"][Key]} key={Key}>
            {props.svgs[props.type]["elements"][Key].text
              ? props.svgs[props.type]["elements"][Key].text
              : null}
          </CustomTag>
        );
      })}
    </svg>
  );
};

export default svgs;
