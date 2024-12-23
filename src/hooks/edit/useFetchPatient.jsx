// hooks/useFetchPatient.js
import { fetchPatients } from "@/lib/api";
import { useState, useEffect } from "react";

const useFetchPatient = (id) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatients(id); // Panggil fungsi dari lib/api.js
        setFormData(data);
      } catch (error) {
        setErrorMessage("Terjadi kesalahan saat mengambil data pasien.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getPatientData();
    }
  }, [id]);

  return { formData, setFormData, loading, errorMessage };
};

export default useFetchPatient;
