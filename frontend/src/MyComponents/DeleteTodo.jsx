import React from "react";
import Button, { Button2 } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { IconTrash } from "@tabler/icons-react";

export default function DeleteTodo({ todoId, onDelete }) {
  async function handleSubmit() {
    await axios.delete(`${BACKEND_URL}/todo/deleteTodo`, {
      headers: {
        token: localStorage.getItem("token"),
      },
      data: {
        todoId: todoId,
      },
    });

    //  Inform parent to update UI
    if (onDelete) {
      onDelete(); // remove it from UI
    }
  }

  return (
    <div>
      <Button2 innerText={<IconTrash stroke={2} />} submit={handleSubmit} />
    </div>
  );
}
