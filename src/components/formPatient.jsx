"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { createPatient } from "@/lib/api";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    namaLengkapPasien: "",
    kodePasien: "",
    jenisKelamin: "",
    tanggalLahir: "",
    tipePasien: "",
    alamat: "",
    nomorTelepon: "",
    email: "",
    pekerjaan: "",
    namaKantor: "",
    alamatKantor: "",
    nomorTeleponKantor: "",
    alergi: "",
    namaKeluargaTerdekat: "",
    hubunganKeluarga: "",
    karyawanRumahSakit: "",
    alamatKeluargaPasien: "",
    nomorTeleponKeluargaPasien: "",
    namaAyahPasien: "",
    pekerjaanAyahPasien: "",
    namaIbuPasien: "",
    pekerjaanIbuPasien: "",
    namaSutriPasien: "",
    pekerjaanSutriPasien: "",
    nomorIdentitasSutriPasien: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call createPatient from the API file
      await createPatient(formData);

      setSuccessMessage("Pasien berhasil ditambahkan!");
      setFormData({
        namaLengkapPasien: "",
        kodePasien: "",
        jenisKelamin: "",
        tanggalLahir: "",
        tipePasien: "",
        alamat: "",
        nomorTelepon: "",
        email: "",
        pekerjaan: "",
        namaKantor: "",
        alamatKantor: "",
        nomorTeleponKantor: "",
        alergi: "",
        namaKeluargaTerdekat: "",
        hubunganKeluarga: "",
        karyawanRumahSakit: "",
        alamatKeluargaPasien: "",
        nomorTeleponKeluargaPasien: "",
        namaAyahPasien: "",
        pekerjaanAyahPasien: "",
        namaIbuPasien: "",
        pekerjaanIbuPasien: "",
        namaSutriPasien: "",
        pekerjaanSutriPasien: "",
        nomorIdentitasSutriPasien: "",
      });
    } catch (err) {
      setErrorMessage("Gagal menambahkan pasien. Periksa kembali input Anda.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="judul">
          <h1>Tambah Pasien</h1>
        </div>
        <div className="error">
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
        <div className="form-container">
          <FloatingLabel
            controlId="floatingInput"
            label="Nama Lengkap Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="namaLengkapPasien"
              value={formData.namaLengkapPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Kode Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="kodePasien"
              value={formData.kodePasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Jenis Kelamin"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Tanggal Lahir"
            className="mb-3"
          >
            <Form.Control
              type="date"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Tipe Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="tipePasien"
              value={formData.tipePasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Alamat"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nomor Telepon"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="nomorTelepon"
              value={formData.nomorTelepon}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Pekerjaan"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nama Kantor"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="namaKantor"
              value={formData.namaKantor}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Alamat Kantor"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="alamatKantor"
              value={formData.alamatKantor}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nomor Telepon Kantor"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="nomorTeleponKantor"
              value={formData.nomorTeleponKantor}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Alergi"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="alergi"
              value={formData.alergi}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nama Keluarga Terdekat"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="namaKeluargaTerdekat"
              value={formData.namaKeluargaTerdekat}
              onChange={handleChange}
            />
          </FloatingLabel>

          {/* <FloatingLabel
            controlId="floatingInput"
            label="Hubungan Keluarga"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="hubunganKeluarga"
              value={formData.hubunganKeluarga}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Karyawan Rumah Sakit"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="karyawanRumahSakit"
              value={formData.karyawanRumahSakit}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Alamat Keluarga Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="alamatKeluargaPasien"
              value={formData.alamatKeluargaPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nomor Telepon Keluarga Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="nomorTeleponKeluargaPasien"
              value={formData.nomorTeleponKeluargaPasien}
              onChange={handleChange}
            />
          </FloatingLabel> */}

          {/* <FloatingLabel
            controlId="floatingInput"
            label="Nama Ayah Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="namaAyahPasien"
              value={formData.namaAyahPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Pekerjaan Ayah Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="pekerjaanAyahPasien"
              value={formData.pekerjaanAyahPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nama Ibu Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="namaIbuPasien"
              value={formData.namaIbuPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Pekerjaan Ibu Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="pekerjaanIbuPasien"
              value={formData.pekerjaanIbuPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nama Sutri Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="namaSutriPasien"
              value={formData.namaSutriPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Pekerjaan Sutri Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="pekerjaanSutriPasien"
              value={formData.pekerjaanSutriPasien}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Nomor Identitas Sutri Pasien"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="nomorIdentitasSutriPasien"
              value={formData.nomorIdentitasSutriPasien}
              onChange={handleChange}
            />
          </FloatingLabel> */}
        </div>
        <Button variant="primary" onClick={handleSubmit}>
          Tambah Pasien
        </Button>
      </div>
    </>
  );
};

export default PatientForm;
