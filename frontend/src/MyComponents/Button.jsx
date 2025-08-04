import React from "react";

export default function Button({ submit, innerText }) {
  return (
    <div>
      <button
        className="cursor-pointer p-2 bg-red-400 rounded"
        onClick={submit}
      >
        {innerText}
      </button>
    </div>
  );
}

export function Button2({ submit, innerText }) {
  return (
    <button
      className="cursor-pointer p-2 bg-blue-400 rounded-3xl hover:scale-110"
      onClick={submit}
    >
      {innerText}
    </button>
  );
}
