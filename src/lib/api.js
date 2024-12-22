import axios from "axios";

const API_BASE_URL = "http://160.20.104.177:4141/api/NewPatient";

// Create a reusable function to get headers
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW16YWhAZ21haWwuY29tIiwianRpIjoiMjNmYWVlZjItOTcxMi00MDVhLTkxMDUtZjJkZjhmOWVmNDRkIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImhhbXphaEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJoYW16YWhAZ21haWwuY29tIiwiZXhwIjoxNzM0ODgzNTkzLCJpc3MiOiJNeUFwaUlzc3VlciIsImF1ZCI6Ik15QXBpQXVkaWVuY2UifQ.rc4wJ3XHuYZTw6t4_ZClBpqtIQnROUnIiZOPM5WDmM4",
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

// const createPatient = async (formData) => {
//   try {
//     console.log("Sending data:", formData); // Tambahkan log untuk memeriksa data yang dikirim
//     const response = await axios.post(
//       "http://160.20.104.177:4141/api/NewPatient",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW16YWhAZ21haWwuY29tIiwianRpIjoiNzhkNTEzM2ItMWVkZi00Yjc4LTg0OTctYzE0NTlhODBjMTc2IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImhhbXphaEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJoYW16YWhAZ21haWwuY29tIiwiZXhwIjoxNzM0NzYyNTEwLCJpc3MiOiJNeUFwaUlzc3VlciIsImF1ZCI6Ik15QXBpQXVkaWVuY2UifQ._bUEj8yzj1vXQrAI3w2sZjn2ciSf02b0-dlI72JMbLo",
//         },
//         body: JSON.stringify(formData),
//       },
//       console.log(response.formData)
//     );

//     if (!response.ok) {
//       const errorData = await response.json(); // Tangkap pesan error dari server
//       console.log("Server Error:", errorData);
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error creating patient:", error);
//   }
// };

// Create a new patient
export const createPatient = async (data) => {
  try {
    const response = await axios.post(
      API_BASE_URL,
      data,
      {
        headers: getHeaders(),
      },
      console.log(response.data)
    );
    return response.data;
  } catch (error) {
    throw new Error("Gagal menambahkan pasien.");
    console.log(error);
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
