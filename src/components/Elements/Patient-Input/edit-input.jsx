import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const EditInput = ({ label, type, name, value, onChange }) => {
  return (
    <FloatingLabel
      label={label}
      controlId={`floatingInput_${name}`} // controlId tetap digunakan untuk konsistensi
      className="mb-3"
    >
      <Form.Control type={type} name={name} value={value} onChange={onChange} />
    </FloatingLabel>
  );
};

export default EditInput;
