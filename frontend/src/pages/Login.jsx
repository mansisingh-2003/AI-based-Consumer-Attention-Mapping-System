import { useState } from "react";
import api from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.access_token);

      alert("Login Successful");

      console.log(response.data);

    } catch (error) {

    console.log(error.response);
    console.log(error.response?.data);
    alert(JSON.stringify(error.response?.data));

    }

  };

  return (
    <div>

      <h1>Consumer Attention Mapping System</h1>

      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

    </div>
  );

}

export default Login;