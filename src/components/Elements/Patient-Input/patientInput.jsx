import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const PatientInput = ({ label, type, name, value, onChange }) => {
  return (
    <FloatingLabel
      controlId={`floatingInput_${name}`}
      label={label}
      className="mb-3"
    >
      <Form.Control type={type} name={name} value={value} onChange={onChange} />
    </FloatingLabel>
  );
};

export default PatientInput;
