// components/AuthForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import check from "../assets/check.webp";
import cross from "../assets/cross.png";
import "../styles/Auth.css";

export default function AuthForm({ type }) {
  const isSignup = type === "signup";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = async () => {
    const endpoint = isSignup ? "/user/signup" : "/user/signin";
    const data = isSignup
      ? { email, password, firstname, lastname }
      : { email, password };

    try {
      const response = await axios.post(
        `http://localhost:3000${endpoint}`,
        data
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(token);

      const firstname = response.data.firstname;
      localStorage.setItem("firstname", firstname);
      console.log(firstname);

      const email = response.data.email;
      localStorage.setItem("email", email);
      console.log(email);

      console.log(
        `${isSignup ? "Signup" : "Signin"} successful:`,
        response.data
      );

      navigate(`${isSignup ? "/todoiest/signin" : "/todoiest/todos"}`);

      // alert(`${isSignup ? "Signup" : "Signin"} successful`);
    } catch (error) {
      console.error(
        `${isSignup ? "Signup" : "Signin"} failed:`,
        error.response?.data || error.message
      );

      alert(`${isSignup ? "Signup" : "Signin"} failed`);
    }
  };

  return (
    <div className="container ">
      <div className="left-container ">
        <h1>
          {isSignup ? "A few steps away from becoming a pro" : "Welcome Back!"}
        </h1>
        <hr />
        <div className="leftchild-container">
          <img src={check} alt="Status" />
          <h2 style={{ color: "white" }}>
            {isSignup ? "Done" : "Enter your credentials"}
          </h2>
        </div>
        <div className="leftchild-container">
          <img src={cross} alt="Status" />
          <h2 style={{ color: "red" }}>
            {isSignup ? "Not Done" : "Don't have an account?"}
          </h2>
        </div>
      </div>

      <div className="right-container">
        <h1>{isSignup ? "SignUp" : "Signin"}</h1>
        <div className="rightChild-container">
          <div className="inputContainer">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="inputContainer">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isSignup && (
            <>
              <div className="inputContainer">
                <input
                  type="text"
                  value={firstname}
                  placeholder="Firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  value={lastname}
                  placeholder="Lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <button onClick={handleSubmit}>
            {isSignup ? "SignUp" : "Signin"}
          </button>

          {isSignup ? (
            <Link to="/todoiest/signin">Already have an account? Signin</Link>
          ) : (
            <Link to="/todoiest/signup">Don't have an account? Signup</Link>
          )}
        </div>
      </div>
    </div>
  );
}
