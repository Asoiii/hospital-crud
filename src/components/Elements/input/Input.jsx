import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
