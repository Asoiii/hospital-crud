import axios from "axios";

const API_BASE_URL = "http://160.20.104.177:4141/api/NewPatient";

// Create a reusable function to get headers
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW16YWhAZ21haWwuY29tIiwianRpIjoiYTUzYThjODQtYzNhNS00ZWViLTliMzUtOTAyYjdjZThkNjdjIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImhhbXphaEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJoYW16YWhAZ21haWwuY29tIiwiZXhwIjoxNzM0Njg2ODMzLCJpc3MiOiJNeUFwaUlzc3VlciIsImF1ZCI6Ik15QXBpQXVkaWVuY2UifQ.JWGZbsnSHKXk-dFjG6RTn7ZvrslQ_L8rzY5hpLQBiOg",
});

// Fetch all patients

export const fetchPatients = async () => {
  try {
    const response = await axios.get(API_BASE_URL, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    throw new Error("Gagal memuat daftar pasien.");
  }
};
// Fetch a patient by ID
export const fetchPatientById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    throw new Error("Gagal memuat detail pasien.");
  }
};

// Create a new patient
export const createPatient = async (data) => {
  try {
    const response = await axios.post(API_BASE_URL, data, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    throw new Error("Gagal menambahkan pasien.");
  }
};

// Delete a patient
export const deletePatient = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`, { headers: getHeaders() });
  } catch (error) {
    throw new Error("Gagal menghapus pasien.");
  }
};
