// import React, { useEffect } from "react";
// import "../styles/Auth.css"; // Your CSS here

// export default function Auth() {
//   return (
//     <div>
//       <h1>SignUp</h1>
//       <div>
//         <label htmlFor="email">email</label>
//         <input type="email" id="email" />
//         <label htmlFor="password">password</label>
//         <input type="password" id="password" />
//         <label htmlFor="firstname">firstname</label>
//         <input type="text" id="firstname" />
//         <label htmlFor="lastname">lastname</label>
//         <input type="text" id="lastname" />
//         <button>SignUp</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import "../styles/Auth.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        email,
        password,
        firstname,
        lastname,
      });

      console.log("Signup successful:", response.data);
      alert("Signup successful");
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  );
}
