// components/AuthForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button, { Button2 } from "./Button";
import { IconCircleCheck, IconXboxX } from "@tabler/icons-react";

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

      localStorage.setItem("isAuthenticated", true);
      window.dispatchEvent(new Event("authChange"));

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
  // .container .left-container .leftchild-container{
  //     display: flex;
  // }
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-50 p-4 ">
      <div className="w-full max-w-5xl flex shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left Panel */}
        <div className="w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            {isSignup
              ? "A few steps away from becoming a pro"
              : "Welcome Back!"}
          </h1>
          <hr className="border-white w-full mb-6" />
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-2">
              <IconCircleCheck stroke={2} size={48} />
              <h2 className="text-lg">
                {isSignup ? "Done" : "Enter your credentials"}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <IconXboxX stroke={2} size={48} />
              <h2 className="text-lg">
                {isSignup ? "Not Done" : "Don't have an account?"}
              </h2>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-8 bg-white">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {isSignup ? "Sign Up" : "Sign In"}
          </h1>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-3 rounded-lg"
            />

            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-3 rounded-lg"
            />

            {isSignup && (
              <>
                <input
                  type="text"
                  value={firstname}
                  placeholder="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  className="border border-gray-300 p-3 rounded-lg"
                />
                <input
                  type="text"
                  value={lastname}
                  placeholder="Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  className="border border-gray-300 p-3 rounded-lg"
                />
              </>
            )}

            <Button
              onClick={handleSubmit}
              innerText={isSignup ? "Sign Up" : "Sign In"}
            />

            <div className="text-center mt-4">
              {isSignup ? (
                <Link
                  to="/todoiest/signin"
                  className="text-blue-600 hover:underline"
                >
                  Already have an account? Sign in
                </Link>
              ) : (
                <Link
                  to="/todoiest/signup"
                  className="text-blue-600 hover:underline"
                >
                  Don't have an account? Sign up
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
