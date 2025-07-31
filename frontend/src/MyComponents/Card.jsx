import React, { children } from "react";

export default function Card({ children }) {
  return (
    <div className="bg-blue-200 p-1 w-92 h-24 m-6 rounded-xl">{children}</div>
  );
}
