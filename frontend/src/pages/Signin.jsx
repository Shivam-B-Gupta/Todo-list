import axios from "axios";
import React, { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signin", {
        email,
        password,
      });

      console.log("Signin Successfull");
      alert("Signinin Successfull");
    } catch (err) {
      console.log(`Error Signing in ${err}`);
      alert(`Error Signing in ${err}`);
    }
  };

  return (
    <div>
      <h1>Signin Page</h1>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignin}>Signin</button>
      </div>
    </div>
  );
}
