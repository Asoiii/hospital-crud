"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Alert } from "react-bootstrap";
import { usePatients } from "../../hooks/usePatients";
import { deletePatient } from "../../lib/api";
import LoadingSpinner from "../../components/Elements/loading/loading";
import PatientTable from "../../components/Ui/patient-table";
import { validateUser } from "@/lib/middleware";

const PatientList = () => {
  const { patients, loading, error } = usePatients();
  const [localPatients, setLocalPatients] = useState([]);

  useEffect(() => {
    validateUser();
  }, []);

  useEffect(() => {
    if (patients) {
      setLocalPatients(patients);
    }
  }, [patients]);

  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      setLocalPatients(
        localPatients.filter((patient) => patient.patientRegistrationId !== id)
      );
    } catch (error) {
      console.error("Gagal menghapus pasien", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Daftar Pasien</h1>
      <Link href="/patients/create">
        <Button variant="primary" className="mb-3">
          Tambah Pasien Baru
        </Button>
      </Link>
      <PatientTable patients={localPatients} onDelete={handleDelete} />
    </div>
  );
};

export default PatientList;
