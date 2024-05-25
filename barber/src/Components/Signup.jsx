import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", { name, email, password })
      .then((results) => console.log(results))
      .catch((err) => console.log(err));
      navigate("/");
      window.alert("Sccessfully registered!")
  };
  return (
    <>
      <div className="outersignup">
        <div className="signup">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="credentials-div">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div className="credentials-div">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div className="credentials-div">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="login-button">
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="additional-div">
            <p>Already have a account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
