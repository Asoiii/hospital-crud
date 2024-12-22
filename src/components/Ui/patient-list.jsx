"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Table, Button, Spinner, Alert } from "react-bootstrap";
import { usePatients } from "../../hooks/usePatients";
import { deletePatient } from "../../lib/api"; // Pastikan fungsi delete terhubung
import LoadingSpinner from "../../components/Elements/loading/loading";

const PatientList = () => {
  const { patients, loading, error } = usePatients();
  const [localPatients, setLocalPatients] = useState([]);

  useEffect(() => {
    if (patients) {
      setLocalPatients(patients); // Mengisi state lokal dengan data pasien
    }
  }, [patients]);

  // Fungsi untuk menghapus pasien dan memperbarui daftar lokal
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
    return LoadingSpinner;
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

      <Table bordered hover>
        <thead className="thead-light">
          <tr>
            <th>Kode Pasien</th>
            <th>Nama Lengkap</th>
            <th>Tanggal Lahir</th>
            <th>Jenis Kelamin</th>
            <th>Alergi</th>
            <th>Nomor Telepon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {localPatients.map((patient) => (
            <tr key={patient.patientRegistrationId}>
              <td>{patient.kodePasien}</td>
              <td>{patient.namaLengkapPasien}</td>
              <td>{patient.tanggalLahir}</td>
              <td>{patient.jenisKelamin}</td>
              <td>{patient.alergi}</td>
              <td>{patient.nomorTelepon1}</td>
              <td>
                <Link
                  href={`/patients/detail/${patient.patientRegistrationId}`}
                >
                  <Button variant="success" size="sm" className="mr-2">
                    Lihat
                  </Button>
                </Link>
                <Link href={`/patients/edit/${patient.patientRegistrationId}`}>
                  <Button variant="warning" size="sm" className="mr-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDelete(patient.patientRegistrationId)}
                  variant="danger"
                  size="sm"
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientList;
