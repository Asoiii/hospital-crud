import { useState, useEffect } from "react";
import { fetchPatientById } from "../lib/api";

const usePatientData = (id) => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const getPatientDetails = async () => {
        try {
          const data = await fetchPatientById(id);
          setPatient(data);
        } catch (err) {
          setError("Gagal memuat detail pasien.");
        } finally {
          setLoading(false);
        }
      };
      getPatientDetails();
    }
  }, [id]);

  return { patient, loading, error };
};

export default usePatientData;
