import React from "react";
import Link from "next/link";
import { Table, Button } from "react-bootstrap";

const PatientTable = ({ patients, onDelete }) => {
  return (
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
        {patients.map((patient) => (
          <tr key={patient.patientRegistrationId}>
            <td>{patient.kodePasien}</td>
            <td>{patient.namaLengkapPasien}</td>
            <td>{patient.tanggalLahir}</td>
            <td>{patient.jenisKelamin}</td>
            <td>{patient.alergi}</td>
            <td>{patient.nomorTelepon1}</td>
            <td>
              <Link href={`/patients/detail/${patient.patientRegistrationId}`}>
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
                onClick={() => onDelete(patient.patientRegistrationId)}
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
  );
};

export default PatientTable;
