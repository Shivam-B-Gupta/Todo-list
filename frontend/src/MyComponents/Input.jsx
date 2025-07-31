import React from "react";

export default function Inputfield({ type, placeholder, setVariable, value }) {
  return (
    <div
      className="inputContainer"
      style={{
        height: "2.5rem",
        width: "19rem",
        margin: "0.4rem 0",
        borderradius: "0.4rem",
        border: 0,
        borderbottom: "2px solid grey",
      }}
    >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setVariable(e.target.value)}
        required
      />
    </div>
  );
}

export function Inputfield2({ title, type, value, setVariable }) {
  return (
    <input
      type={type}
      placeholder={title}
      value={value}
      onChange={(e) => setVariable(e.target.value)}
      className="border-none outline-none p-4  h-12 "
    />
  );
}
