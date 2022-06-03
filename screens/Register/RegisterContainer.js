import React, { useState, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import Register from "./Register";

const RegisterContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <Register
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      register={register}
    />
  );
};

export default RegisterContainer;
