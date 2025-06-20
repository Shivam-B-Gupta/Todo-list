import axios from "axios";
import Inputfield from "./Input";
import { useRef, useState } from "react";
import React from "react";
import { BACKEND_URL } from "../config";
import Button from "./Button";
import PopUpModal from "./PopUpModal";
import { useNavigate } from "react-router-dom";

export default function Addtodo() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const data = { title, description };
  const navigate = useNavigate();
  const inputRef = useRef();

  async function handleSubmit() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/todo/createTodo`,
        data,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      navigate("/todoiest/todos");
      alert("Todo added successfully!");
      settitle("");
      setDescription("");
    } catch (err) {
      console.log(`Error while adding todo ${err}`);
    }
  }

  return (
    <div>
      <PopUpModal
        submit={handleSubmit}
        innerText="Add Todo"
        title={title}
        setTitle={settitle}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}
