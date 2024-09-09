import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginHos = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("cones");
      const response = await axios.post(
        "http://localhost:8000/api/hospitals/login",
        { email: hospitalName, password }
      );
      if (response.status === 200) {
        console.log(response.data);
        // Redirect to the hospital dashboard
        navigate("/hospital");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <main>
      <form className="otheruser" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          className="entry"
          id="email"
          type="email"
          required
          placeholder="Enter Hospital Name"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          className="entry"
          id="password"
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <br />

      <p>OR</p>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </main>
  );
};

export default LoginHos;
