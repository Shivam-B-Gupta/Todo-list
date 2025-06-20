import React from "react";
import Button from "./Button";
import { BACKEND_URL } from "../config";

export default function UpdateTodo() {
  //   const data = { title, description };

  function handleUpdate() {
    axios.put(`${BACKEND_URL}/todo/updateTodo`, data);
  }
  return (
    <div>
      <Button innerText={"Update"} submit={handleUpdate} />
    </div>
  );
}
