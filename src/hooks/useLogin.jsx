import { useState, useEffect, useRef } from "react";
import { login } from "../lib/auth";

// const useLogin = () => {
//   const [loginFailed, setLoginFailed] = useState("");
//   const usernameRef = useRef(null);
//   const [username, setUsername] = useState("");

//   const handleLogin = (event) => {
//     event.preventDefault();

//     const data = {
//       username: event.target.username.value,
//       password: event.target.password.value,
//     };

//     login(data, (status, res) => {
//       if (status) {
//         localStorage.setItem("token", res.token);
//         localStorage.setItem("username", data.username); // Simpan username/email
//         window.location.href = "/patients";
//       } else {
//         setLoginFailed("Email dan password salah");
//       }
//     });
//   };

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) setUsername(storedUsername);
//   }, []);

//   return { handleLogin, username, loginFailed };
// };

// export default useLogin;

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
