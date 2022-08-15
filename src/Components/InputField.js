import React from "react";
const InputFeild = (props) => {
  return (
    <div>
      <label htmlFor={props.inputId}>{props.inputId}: </label>
      <input type="text" id={props.inputId} />
    </div>
  );
};

export default InputFeild;
