import React, { useState } from "react";
import Button from "./Button";
import { BACKEND_URL } from "../config";
import PopUpModal from "./PopUpModal";
import axios from "axios";
import { IconEdit } from "@tabler/icons-react";

export default function UpdateTodo({ todo, onUpdate }) {
  console.log(todo);
  const todoId = todo._id;
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const data = { title, description };

  async function handleUpdate() {
    try {
      const response = await axios.put(
        `${BACKEND_URL}/todo/updateTodo`,
        { title, description, todoId },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      const updatedTodo = response.data.updatedTodo || {
        ...todo,
        title,
        description,
      };

      onUpdate(updatedTodo);
      setShowModal(false);
    } catch (err) {
      console.log(`Error while updating todo: ${err}`);
    }
  }
  return (
    <div>
      <Button
        innerText={<IconEdit stroke={2} />}
        submit={() => setShowModal(true)}
      />
      {showModal && (
        <PopUpModal
          innerText={"Update Todo"}
          submit={handleUpdate}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      )}
    </div>
  );
}
