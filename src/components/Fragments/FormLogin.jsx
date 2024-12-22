"use client";

import React, { useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../../components/Elements/input/index";
import useLogin from "../../hooks/useLogin";

const FormLogin = () => {
  const { handleLogin, loginFailed } = useLogin();
  const usernameRef = useRef();

  return (
    <div>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Username"
          type="text"
          name="username"
          placeholder="Asoi111"
          ref={usernameRef}
        />
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="************"
        />
        <Button className="btn btn-primary w-100 " type="submit">
          Login
        </Button>

        {loginFailed && (
          <p className="text-danger text-center mt-3">{loginFailed}</p>
        )}
      </form>
    </div>
  );
};

export default FormLogin;
