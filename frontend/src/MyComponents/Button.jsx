import React from "react";

export default function Button({ submit, innerText }) {
  return (
    <div>
      <button
        className="btn"
        onClick={submit}
        style={{
          backgroundColor: "rgb(57, 121, 131)",
          borderRadius: "1rem",
          color: "white",
          margin: "0 1rem",
        }}
      >
        {innerText}
      </button>
    </div>
  );
}
