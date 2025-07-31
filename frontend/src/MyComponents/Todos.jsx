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

  //Update todo from UI after Updation
  function handleUpdate() {}

  return (
    <div className="flex flex-wrap">
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        todos.map((todo) => (
          <Card key={todo._id}>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="radio" />
                <h2 className="font-bold">{todo.title}</h2>
              </div>
              <div className="flex gap-2">
                <DeleteTodo
                  todoId={todo._id}
                  onDelete={() => handleDelete(todo._id)}
                />
                <UpdateTodo
                  todo={todo}
                  onUpdate={(updatedTodo) => {
                    setTodos((prev) =>
                      prev.map((t) =>
                        t._id === updatedTodo._id ? updatedTodo : t
                      )
                    );
                  }}
                />
              </div>
            </div>
            <p>{todo.description}</p>
          </Card>
        ))
      )}
    </div>
  );
}

export default TodoList;
