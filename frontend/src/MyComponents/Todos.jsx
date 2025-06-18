import React, { useState } from "react";
import useContent from "../hooks/useContent";
import Card from "./Card";
import Button from "./Button";
import DeleteTodo from "./DeleteTodo";

function TodoList() {
  const contents = useContent(); // fetching todos from the backend

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {contents.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        contents.map((todo) => (
          <Card key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <div style={{ display: "flex" }}>
              <DeleteTodo todoId={todo._id} />
              <Button innerText={"Update"} />
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

export default TodoList;
