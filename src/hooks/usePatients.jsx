"use client";

import { useState, useEffect } from "react";
import { fetchPatients } from "@/lib/api";

export const usePatients = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  return { patients, error, loading };
};

export default async function handleDelete(id) {
  if (!confirm("Apakah Anda yakin ingin menghapus pasien ini?")) return;

  try {
    await deletePatient(id);
    alert("Pasien berhasil dihapus!");
    window.location.reload();
  } catch (err) {
    alert("Gagal menghapus pasien. Silakan coba lagi.");
  }
}
