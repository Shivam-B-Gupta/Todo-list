import React, { useEffect, useState } from "react";
import useContent from "../hooks/useContent";
import Card from "./Card";
import Button from "./Button";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

function TodoList() {
  const contents = useContent(); // Fetching from backend
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(contents);
  }, [contents]);

  // 🧹 Remove todo from UI after deletion
  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        todos.map((todo) => (
          <Card key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <div style={{ display: "flex" }}>
              <DeleteTodo
                todoId={todo._id}
                onDelete={() => handleDelete(todo._id)}
              />
              <UpdateTodo todo={todo} />
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

export default TodoList;
