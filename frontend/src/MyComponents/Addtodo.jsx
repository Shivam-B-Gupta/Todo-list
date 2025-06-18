import axios from "axios";
import Inputfield from "./Input";
import { useState } from "react";
import React from "react";
import { BACKEND_URL } from "../config";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Addtodo() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const data = { title, description };
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const respose = await axios.post(`${BACKEND_URL}/todo/createTodo`, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
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
      <Inputfield
        type="text"
        placeholder="Title"
        setVariable={settitle}
        value={title}
      />
      <Inputfield
        type="text"
        placeholder="Description"
        setVariable={setDescription}
        value={description}
      />
      <Button submit={handleSubmit} innerText={"Add Todo"} />
    </div>
  );
}
