export const validateUser = () => {
  const storedEmail = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // Validasi email dan password
  if (storedEmail !== "hamzah@gmail.com" || storedPassword !== "Abc12345!") {
    alert("Anda tidak memiliki akses.");
    window.location.href = "/auth/login";
  }
};
