import React from "react";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function DeleteTodo({ todoId }) {
  async function handleSubmit() {
    await axios.delete(`${BACKEND_URL}/todo/deleteTodo`, {
      headers: {
        token: localStorage.getItem("token"),
      },
      data: {
        todoId: todoId,
      },
    });
  }

  return (
    <div>
      <Button innerText={"Delete Todo"} submit={handleSubmit} />
    </div>
  );
}
