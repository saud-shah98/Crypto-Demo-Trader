import React, { useState, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import Login from "./Login";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <Login
      login={login}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default LoginContainer;
