"use client";

import { Button } from "react-bootstrap";
import { usePatientForm } from "@/hooks/usePatientForm";
import { handlePatientSubmit } from "../../hooks/handlehooks/handle/handleSubmit";
import { handleChange } from "../../hooks/handlehooks/handle/handleChange";
import PatientInput from "../../components/Elements/Patient-Input/patientInput";
import { useRouter } from "next/navigation";

const PatientForm = () => {
  const router = useRouter(); // Inisialisasi useRouter
  const {
    formData,
    setFormData,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  } = usePatientForm();

  return (
    <div className="container">
      <div className="judul">
        <h1>Tambah Pasien</h1>
      </div>
      <div className="error">
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <div className="form-container">
        <div className="input-grid">
          <PatientInput
            label="Nama Lengkap Pasien"
            type="text"
            name="namaLengkapPasien"
            value={formData.namaLengkapPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Kode Pasien"
            type="text"
            name="kodePasien"
            value={formData.kodePasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Jenis Kelamin"
            type="text"
            name="jenisKelamin"
            value={formData.jenisKelamin}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Tanggal Lahir"
            type="date"
            name="tanggalLahir"
            value={formData.tanggalLahir}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Tipe Pasien"
            type="text"
            name="tipePasien"
            value={formData.tipePasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Alamat"
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nomor Telepon"
            type="text"
            name="nomorTelepon"
            value={formData.nomorTelepon}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Pekerjaan"
            type="text"
            name="pekerjaan"
            value={formData.pekerjaan}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nama Kantor"
            type="text"
            name="namaKantor"
            value={formData.namaKantor}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Alamat Kantor"
            type="text"
            name="alamatKantor"
            value={formData.alamatKantor}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nomor Telepon Kantor"
            type="text"
            name="nomorTeleponKantor"
            value={formData.nomorTeleponKantor}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Alergi"
            type="text"
            name="alergi"
            value={formData.alergi}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nama Keluarga Terdekat"
            type="text"
            name="namaKeluargaTerdekat"
            value={formData.namaKeluargaTerdekat}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Karyawan Rumah Sakit"
            type="text"
            name="karyawanRumahSakit"
            value={formData.karyawanRumahSakit}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Alamat Keluarga Pasien"
            type="text"
            name="alamatKeluargaPasien"
            value={formData.alamatKeluargaPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nomor Telepon Keluarga Pasien"
            type="text"
            name="nomorTeleponKeluargaPasien"
            value={formData.nomorTeleponKeluargaPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nama Ayah Pasien"
            type="text"
            name="namaAyahPasien"
            value={formData.namaAyahPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Pekerjaan Ayah Pasien"
            type="text"
            name="pekerjaanAyahPasien"
            value={formData.pekerjaanAyahPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nama Ibu Pasien"
            type="text"
            name="namaIbuPasien"
            value={formData.namaIbuPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Pekerjaan Ibu Pasien"
            type="text"
            name="pekerjaanIbuPasien"
            value={formData.pekerjaanIbuPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nama Pasangan Pasien"
            type="text"
            name="namaSutriPasien"
            value={formData.namaSutriPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Pekerjaan Pasangan Pasien"
            type="text"
            name="pekerjaanSutriPasien"
            value={formData.pekerjaanSutriPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
          <PatientInput
            label="Nomor Identitas Pasangan Pasien"
            type="text"
            name="nomorIdentitasSutriPasien"
            value={formData.nomorIdentitasSutriPasien}
            onChange={(e) => handleChange(e, formData, setFormData)}
          />
        </div>
      </div>
      <Button
        variant="primary"
        onClick={(e) =>
          handlePatientSubmit(
            e,
            formData,
            setFormData,
            setSuccessMessage,
            setErrorMessage
          )
        }
      >
        Tambah Pasien
      </Button>
    </div>
  );
};

export default PatientForm;
