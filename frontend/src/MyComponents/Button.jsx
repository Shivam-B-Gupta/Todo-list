import React from "react";

export default function Button({ submit, innerText }) {
  return (
    <div>
      <button className="cursor-pointer" onClick={submit}>
        {innerText}
      </button>
    </div>
  );
}
