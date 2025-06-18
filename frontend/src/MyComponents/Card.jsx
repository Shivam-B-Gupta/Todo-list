import React, { children } from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(220, 216, 229)",
        border: "solid 1px black",
        padding: "2rem",
        margin: "2rem",
        width: "20rem",
        height: "10rem",
        borderRadius: "1rem",
      }}
    >
      {children}
    </div>
  );
}
