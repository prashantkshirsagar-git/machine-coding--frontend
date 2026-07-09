import React from "react";
import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const addTodoitem = () => {
    if (input.trim() === "") return;
    const item = {
      id: todolist.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodolist((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodolist(
      todolist.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      }),
    );
  };
  const deleteTodo = (id) => {
    setTodolist(todolist.filter((t) => t.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter To Do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => addTodoitem()}>Add</button>
      <ul>
        {todolist.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strikethrough" : ""}>
              {" "}
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
