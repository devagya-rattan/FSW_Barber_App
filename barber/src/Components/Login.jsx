import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((results) => {
        console.log(results);

        if (results.data === "success") {
          navigate("/");
          toast("Successful Login!!");
          window.alert("Successful Login!!")
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="outersignup">
        <div className="signup">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="credentials-div">
              <label>Email</label>
              <input
                value={email}
                placeholder="Enter your email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="credentials-div">
              <label>Password</label>
              <input
                value={password}
                placeholder="Enter your password"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
          </form>
          <div className="additional-div">
            <p>Don't have a account?</p>
            <Link to="/register">Signup</Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
