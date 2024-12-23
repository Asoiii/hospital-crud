"use client";

import { usePatientFormEdit } from "@/hooks/edit/submitUpdate";
import LoadingSpinner from "../Elements/loading/loading";
import EditInput from "../Elements/Patient-Input/edit-input";
import { Button } from "react-bootstrap";
import { handleChange } from "@/hooks/handlehooks/handle/handleChange";
import useFetchPatient from "@/hooks/edit/useFetchPatient";
import { useParams } from "next/navigation";

// const EditPatientForm = () => {
//   const { edit: id } = useParams(); // Ambil patient ID dari URL

//   // Fetching data pasien berdasarkan ID
//   const { formData, setFormData, loading, errorMessage, fetchError } =
//     useFetchPatient(id);

//   // Custom hook untuk form edit pasien
//   const {
//     successMessage,
//     setSuccessMessage,
//     setErrorMessage,
//     updatePatientSubmit,
//   } = usePatientFormEdit();

//   // Tampilkan loading spinner saat data sedang dimuat
//   if (loading) {
//     return (
//       <div>
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   // Daftar field untuk form edit pasien
//   const fields = [
//     "kodePasien",
//     "nomorRekamMedisBaru",
//     "nomorRekamMedisLama",
//     "tipePasien",
//     "nomorPolis",
//     "namaLengkapPasien",
//     "title",
//     "nomorIdentitasPasien",
//     "tempatLahir",
//     "tanggalLahir",
//     "jenisKelamin",
//     "pasienPrioritas",
//     "statusPasien",
//     "kewarganegaraan",
//     "alamatLengkap",
//     "kodePos",
//     "nomorTelepon1",
//     "nomorTelepon2",
//     "email",
//     "pekerjaan",
//     "namaKantor",
//     "alamatKantor",
//     "nomorTeleponKantor",
//     "alergi",
//     "namaKeluargaTerdekat",
//     "hubunganKeluarga",
//     "karyawanRumahSakit",
//     "alamatKeluargaPasien",
//     "nomorTeleponKeluargaPasien",
//     "namaAyahPasien",
//     "pekerjaanAyahPasien",
//     "namaIbuPasien",
//     "pekerjaanIbuPasien",
//     "namaSutriPasien",
//     "pekerjaanSutriPasien",
//     "nomorIdentitasSutriPasien",
//   ];

//   return (
//     <div className="container">
//       <div className="judul">
//         <h1>Edit Pasien</h1>
//       </div>

//       {/* Pesan sukses dan error */}
//       <div className="error">
//         {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//         {(fetchError || errorMessage) && (
//           <p style={{ color: "red" }}>{fetchError || errorMessage}</p>
//         )}
//       </div>

//       <div className="form-container">
//         <div className="input-grid">
//           {/* Mapping semua field untuk form edit pasien */}
//           {fields.map((field) => (
//             <EditInput
//               key={field}
//               label={field.replace(/([A-Z])/g, " $1")} // Tambahkan spasi sebelum huruf kapital
//               type={field.includes("email") ? "email" : "text"} // Tentukan tipe input berdasarkan field
//               name={field}
//               value={formData[field] || ""} // Pastikan value tidak undefined
//               onChange={(e) => handleChange(e, formData, setFormData)} // Handle perubahan input
//             />
//           ))}
//         </div>
//       </div>

//       {/* Tombol untuk submit form */}
//       <Button
//         variant="primary"
//         onClick={(e) =>
//           updatePatientSubmit(
//             e,
//             formData,
//             setFormData,
//             setSuccessMessage,
//             setErrorMessage,
//             id // Kirim patient ID ke fungsi handle submit
//           )
//         }
//       >
//         Update Pasien
//       </Button>
//     </div>
//   );
// };

// export default EditPatientForm;

import React, { useState, useEffect } from "react";
import { updatePatient } from "../../lib/api"; // Import your API library

const EditPatientForm = ({ patientId }) => {
  const [formData, setFormData] = useState({
    kodePasien: "",
    nomorRekamMedisBaru: "",
    nomorRekamMedisLama: "",
    tipePasien: "",
    nomorPolis: "",
    namaLengkapPasien: "",
    title: "",
    nomorIdentitasPasien: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    pasienPrioritas: "",
    statusPasien: "",
    kewarganegaraan: "",
    alamatLengkap: "",
    kodePos: "",
    nomorTelepon1: "",
    nomorTelepon2: "",
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

  // Memuat data pasien saat komponen dirender
  useEffect(() => {
    // Bisa gunakan fetchPatientById(patientId) untuk memuat data awal
    // fetchPatientById(patientId).then(response => setFormData(response.data));
  }, [patientId]);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Fungsi submit untuk mengirim data yang diubah
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPatient = await updatePatient(patientId, formData);
      console.log("Pasien diperbarui:", updatedPatient);
      // Bisa tambahkan feedback untuk pengguna
    } catch (error) {
      console.error("Terjadi kesalahan saat memperbarui pasien:", error);
    }
  };

  // nmap untuk memetakan form fields
  const formFields = [
    { label: "Kode Pasien", name: "kodePasien" },
    { label: "Nomor Rekam Medis Baru", name: "nomorRekamMedisBaru" },
    { label: "Nomor Rekam Medis Lama", name: "nomorRekamMedisLama" },
    { label: "Tipe Pasien", name: "tipePasien" },
    { label: "Nomor Polis", name: "nomorPolis" },
    { label: "Nama Lengkap Pasien", name: "namaLengkapPasien" },
    { label: "Title", name: "title" },
    { label: "Nomor Identitas Pasien", name: "nomorIdentitasPasien" },
    { label: "Tempat Lahir", name: "tempatLahir" },
    { label: "Tanggal Lahir", name: "tanggalLahir" },
    { label: "Jenis Kelamin", name: "jenisKelamin" },
    { label: "Pasien Prioritas", name: "pasienPrioritas" },
    { label: "Status Pasien", name: "statusPasien" },
    { label: "Kewarganegaraan", name: "kewarganegaraan" },
    { label: "Alamat Lengkap", name: "alamatLengkap" },
    { label: "Kode Pos", name: "kodePos" },
    { label: "Nomor Telepon 1", name: "nomorTelepon1" },
    { label: "Nomor Telepon 2", name: "nomorTelepon2" },
    { label: "Email", name: "email" },
    { label: "Pekerjaan", name: "pekerjaan" },
    { label: "Nama Kantor", name: "namaKantor" },
    { label: "Alamat Kantor", name: "alamatKantor" },
    { label: "Nomor Telepon Kantor", name: "nomorTeleponKantor" },
    { label: "Alergi", name: "alergi" },
    { label: "Nama Keluarga Terdekat", name: "namaKeluargaTerdekat" },
    { label: "Hubungan Keluarga", name: "hubunganKeluarga" },
    { label: "Karyawan Rumah Sakit", name: "karyawanRumahSakit" },
    { label: "Alamat Keluarga Pasien", name: "alamatKeluargaPasien" },
    {
      label: "Nomor Telepon Keluarga Pasien",
      name: "nomorTeleponKeluargaPasien",
    },
    { label: "Nama Ayah Pasien", name: "namaAyahPasien" },
    { label: "Pekerjaan Ayah Pasien", name: "pekerjaanAyahPasien" },
    { label: "Nama Ibu Pasien", name: "namaIbuPasien" },
    { label: "Pekerjaan Ibu Pasien", name: "pekerjaanIbuPasien" },
    { label: "Nama Sutri Pasien", name: "namaSutriPasien" },
    { label: "Pekerjaan Sutri Pasien", name: "pekerjaanSutriPasien" },
    {
      label: "Nomor Identitas Sutri Pasien",
      name: "nomorIdentitasSutriPasien",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        {formFields.map((field) => (
          <div className="col-md-6 mb-3" key={field.name}>
            <label>{field.label}</label>
            <input
              type="text"
              name={field.name}
              className="form-control"
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-primary">
        Update Patient
      </button>
    </form>
  );
};

export default EditPatientForm;
