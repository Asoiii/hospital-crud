// hooks/usePatientForm.js
import { useState } from "react";
import api from "@/lib/api"; // Mengimpor instance axios yang sudah dikonfigurasi

export const usePatientFormEdit = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePatientSubmit = async (
    event,
    formData,
    setFormData,
    setSuccessMessage,
    setErrorMessage,
    patientId
  ) => {
    event.preventDefault();

    try {
      const response = await api.put(`/patient/${patientId}`, formData); // Menggunakan api yang sudah disetting

      if (response.status === 200) {
        setSuccessMessage("Pasien berhasil diperbarui!");
        setFormData(response.data);
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan saat memperbarui data.");
    }
  };

  return {
    successMessage,
    setSuccessMessage,
    setErrorMessage,
    handlePatientSubmit,
  };
};
