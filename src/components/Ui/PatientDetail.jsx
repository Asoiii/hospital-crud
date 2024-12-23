import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const PatientDetails = ({ patient, onEdit }) => {
  if (!patient) {
    return <Alert variant="warning">Data pasien tidak ditemukan.</Alert>;
  }

  const patientFields = [
    { label: "Nama Lengkap", value: patient.namaLengkapPasien },
    { label: "Kode Pasien", value: patient.kodePasien },
    { label: "Jenis Kelamin", value: patient.jenisKelamin },
    { label: "Tanggal Lahir", value: patient.tanggalLahir },
    { label: "Tipe Pasien", value: patient.tipePasien },
    { label: "Alamat", value: patient.alamat },
    { label: "Nomor Telepon", value: patient.nomorTelepon },
    { label: "Email", value: patient.email },
    { label: "Pekerjaan", value: patient.pekerjaan },
    { label: "Nama Kantor", value: patient.namaKantor },
    { label: "Alamat Kantor", value: patient.alamatKantor },
    { label: "Nomor Telepon Kantor", value: patient.nomorTeleponKantor },
    { label: "Alergi", value: patient.alergi },
    { label: "Nama Keluarga Terdekat", value: patient.namaKeluargaTerdekat },
    { label: "Hubungan Keluarga", value: patient.hubunganKeluarga },
    { label: "Karyawan Rumah Sakit", value: patient.karyawanRumahSakit },
    { label: "Alamat Keluarga Pasien", value: patient.alamatKeluargaPasien },
    {
      label: "Nomor Telepon Keluarga Pasien",
      value: patient.nomorTeleponKeluargaPasien,
    },
    { label: "Nama Ayah Pasien", value: patient.namaAyahPasien },
    { label: "Pekerjaan Ayah Pasien", value: patient.pekerjaanAyahPasien },
    { label: "Nama Ibu Pasien", value: patient.namaIbuPasien },
    { label: "Pekerjaan Ibu Pasien", value: patient.pekerjaanIbuPasien },
    { label: "Nama Suami/Istri Pasien", value: patient.namaSutriPasien },
    {
      label: "Pekerjaan Suami/Istri Pasien",
      value: patient.pekerjaanSutriPasien,
    },
    {
      label: "Nomor Identitas Suami/Istri Pasien",
      value: patient.nomorIdentitasSutriPasien,
    },
  ];

  return (
    <Container className="mt-4">
      <h1>Detail Pasien</h1>
      <ListGroup as="dl">
        {patientFields.map((field, index) => (
          <Row key={index} as="dt">
            <Col sm={3}>{field.label}</Col>
            <Col sm={9} as="dd">
              {field.value}
            </Col>
          </Row>
        ))}
      </ListGroup>
      <Button variant="primary" onClick={onEdit}>
        Edit Pasien
      </Button>
    </Container>
  );
};

export default PatientDetails;
