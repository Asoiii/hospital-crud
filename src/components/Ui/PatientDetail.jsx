import React from "react";
import { Alert, Button } from "react-bootstrap";

const PatientDetails = ({ patient, onEdit }) => {
  if (!patient) {
    return <Alert variant="warning">Data pasien tidak ditemukan.</Alert>;
  }

  return (
    <div className="container mt-4">
      <h1>Detail Pasien</h1>
      <dl className="row">
        <dt className="col-sm-3">Kode Pasien</dt>
        <dd className="col-sm-9">{patient.kodePasien}</dd>

        <dt className="col-sm-3">Nama Lengkap</dt>
        <dd className="col-sm-9">{patient.namaLengkapPasien}</dd>

        <dt className="col-sm-3">Tanggal Lahir</dt>
        <dd className="col-sm-9">{patient.tanggalLahir}</dd>

        <dt className="col-sm-3">Jenis Kelamin</dt>
        <dd className="col-sm-9">{patient.jenisKelamin}</dd>

        <dt className="col-sm-3">Alergi</dt>
        <dd className="col-sm-9">{patient.alergi}</dd>

        <dt className="col-sm-3">Nomor Telepon</dt>
        <dd className="col-sm-9">{patient.nomorTelepon1}</dd>
      </dl>

      <Button variant="primary" onClick={onEdit}>
        Edit Pasien
      </Button>
    </div>
  );
};

export default PatientDetails;
