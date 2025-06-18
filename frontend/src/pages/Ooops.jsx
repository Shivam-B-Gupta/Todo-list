import React from "react";
import Button from "../MyComponents/Button";
import { Link } from "react-router-dom";

export default function Oops() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: "80vh",
      }}
    >
      <h1>Oops</h1>
      <h2>Wrong URL</h2>
      <Link to="/todoiest/todos">
        <Button innerText={"Go to home"} />
      </Link>
    </div>
  );
}
