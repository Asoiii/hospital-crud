"use client";

import { Button } from "react-bootstrap";
import { usePatientForm } from "@/hooks/create/usePatientForm";

import { handleChange } from "../../hooks/handlehooks/handle/handleChange";
import PatientInput from "../../components/Elements/Patient-Input/patientInput";
import { handlePatientSubmit } from "@/hooks/create/handleSubmit";

const PatientForm = () => {
  const {
    formData,
    setFormData,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  } = usePatientForm();

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah pengiriman form default
    handlePatientSubmit(
      formData,
      setFormData,
      setSuccessMessage,
      setErrorMessage
    );
  };

  return (
    <div className="container">
      <div className="judul">
        <h1>Tambah Pasien</h1>
      </div>
      <div className="error">
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-grid">
            {Object.keys(formData).map((key) => (
              <PatientInput
                key={key}
                label={key.replace(/([A-Z])/g, " $1")} // Menambahkan spasi antara huruf besar
                type="text"
                name={key}
                value={formData[key]}
                onChange={(e) => handleChange(e, formData, setFormData)}
              />
            ))}
          </div>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault(); // This is important to prevent default form submission behavior
              handlePatientSubmit(
                e,
                formData,
                setFormData,
                setSuccessMessage,
                setErrorMessage
              );
            }}
          >
            Tambah Pasien
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
