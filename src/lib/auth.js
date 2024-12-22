import axios from "axios";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW16YWhAZ21haWwuY29tIiwianRpIjoiYmIyZWZmMjUtNTYxYS00MTcyLWJmNGQtYTE3NzVlNzg1ODc0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImhhbXphaEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJoYW16YWhAZ21haWwuY29tIiwiZXhwIjoxNzM0Nzg4ODcwLCJpc3MiOiJNeUFwaUlzc3VlciIsImF1ZCI6Ik15QXBpQXVkaWVuY2UifQ.67TwBbMpn0Wuz0_YYr905YOy11w5PrMTxiZXFzjKjow",
});

export const login = async (data, callback) => {
  try {
    const response = await axios.post(
      "http://160.20.104.177:4141/api/Auth/login",
      data,
      { headers: getHeaders() }
    );

    // Pastikan token ada sebelum digunakan
    if (response.data && response.data.token) {
      callback(true, response.data.token);
      console.log(response.data.token);
    } else {
      // Jika tidak ada token di response, kirim error
      callback(false, new Error("Token not found in response"));
    }
  } catch (error) {
    // Cek apakah error adalah response error dari server
    if (error.response) {
      console.error(
        "Server responded with error:",
        error.response.status,
        error.response.data
      );
      callback(false, error.response.data);
    } else {
      // Jika error terjadi pada sisi client
      console.error("Error during login:", error.message);
    }
  }
};

export const isAuthenticated = () => !!localStorage.getItem({ getHeaders });

export const logout = () => {
  // Hapus data login dari localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Arahkan kembali ke halaman login
  window.location.href = "/auth/login";
};
