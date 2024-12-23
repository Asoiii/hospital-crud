import { useState, useEffect, useRef } from "react";
import { login } from "../../lib/auth";

const useLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;

    // Validasi email dan password
    if (email === "hamzah@gmail.com" && password === "Abc12345!") {
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);
      window.location.href = "/patients";
    } else {
      setLoginFailed("Email atau password salah");
    }
  };

  return { handleLogin, loginFailed };
};

export default useLogin;
