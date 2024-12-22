"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchPatientById, createPatient } from "../../../../lib/api";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import LoadingSpinner from "../../../../components/Elements/loading/loading";
import { validateUser } from "@/lib/middleware";

const EditPatient = () => {
  useEffect(() => {
    validateUser();
  }, []);

  const router = useRouter();
  const { id } = useParams();
  const [patient, setPatient] = useState({
    kodePasien: "",
    namaLengkapPasien: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alergi: "",
    nomorTelepon1: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      const getPatientDetails = async () => {
        try {
          const data = await fetchPatientById(id);
          setPatient(data);
        } catch (err) {
          setError("Gagal memuat data pasien.");
        } finally {
          setLoading(false);
        }
      };
      getPatientDetails();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await createPatient(patient);
      router.push("/patients");
    } catch (err) {
      setError("Gagal menyimpan perubahan pasien.");
    } finally {
      setSaving(false);
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
      <h1>Edit Pasien</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="kodePasien">
          <Form.Label>Kode Pasien</Form.Label>
          <Form.Control
            type="text"
            name="kodePasien"
            value={patient.kodePasien}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="namaLengkapPasien">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            name="namaLengkapPasien"
            value={patient.namaLengkapPasien}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="tanggalLahir">
          <Form.Label>Tanggal Lahir</Form.Label>
          <Form.Control
            type="date"
            name="tanggalLahir"
            value={patient.tanggalLahir}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="jenisKelamin">
          <Form.Label>Jenis Kelamin</Form.Label>
          <Form.Control
            as="select"
            name="jenisKelamin"
            value={patient.jenisKelamin}
            onChange={handleChange}
            required
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="alergi">
          <Form.Label>Alergi</Form.Label>
          <Form.Control
            type="text"
            name="alergi"
            value={patient.alergi}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="nomorTelepon1">
          <Form.Label>Nomor Telepon</Form.Label>
          <Form.Control
            type="text"
            name="nomorTelepon1"
            value={patient.nomorTelepon1}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={saving}>
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </Button>
      </Form>
    </div>
  );
};

export default EditPatient;
