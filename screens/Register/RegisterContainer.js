import React, { useState, useContext } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import Register from "./Register";

const RegisterContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("Casual");

  const { register } = useContext(AuthContext);

  return (
    <Register
      register={register}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      username={username}
      setUsername={setUsername}
      difficulty={difficulty}
      setDifficulty={setDifficulty}
    />
  );
};

export default RegisterContainer;
