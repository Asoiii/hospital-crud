import { useState } from "react";

export const usePatientForm = () => {
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
    // hubunganKeluarga: "",
    // karyawanRumahSakit: "",
    // alamatKeluargaPasien: "",
    // nomorTeleponKeluargaPasien: "",
    // namaAyahPasien: "",
    // pekerjaanAyahPasien: "",
    // namaIbuPasien: "",
    // pekerjaanIbuPasien: "",
    // namaSutriPasien: "",
    // pekerjaanSutriPasien: "",
    // nomorIdentitasSutriPasien: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return {
    formData,
    setFormData,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
  };
};
