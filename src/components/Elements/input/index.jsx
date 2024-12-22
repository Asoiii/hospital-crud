import React, { useRef } from "react";
import Label from "./Label";
import Input from "./Input";

import { forwardRef } from "react";

const InputForm = forwardRef(({ label, type, name, placeholder }, ref) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}> {label} </Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );

  InputForm.displayName = "InputForm";
});

export default InputForm;
