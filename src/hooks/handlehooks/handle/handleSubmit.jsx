import { useRouter } from "next/router";
import { createPatient } from "@/lib/api";

export const handlePatientSubmit = async (
  e,
  formData,
  setFormData,
  setSuccessMessage,
  setErrorMessage
) => {
  e.preventDefault();

  // Validasi sederhana
  for (const key in formData) {
    if (!formData[key]) {
      setErrorMessage(`Field ${key} harus diisi!`);
      return;
    }
  }

  try {
    await createPatient(formData); // Mengirim data pasien ke backend
    setSuccessMessage("Pasien berhasil ditambahkan!");
    setErrorMessage("");
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

    // Navigasi kembali ke halaman daftar pasien
    router.push("/patient-list"); // Gantilah '/patient-list' dengan path sesuai halaman daftar pasien Anda.
  } catch (err) {
    setErrorMessage("Gagal menambahkan pasien. Periksa kembali input Anda.");
  }
};
