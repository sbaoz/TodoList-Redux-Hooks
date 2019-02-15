import React, { useState } from "react";
import { useDispatch } from "redux-react-hook";

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      onChange={e => setNewTodo(e.target.value)}
      onKeyDown={e => {
        if (e.key === "Enter") {
          dispatch({ type: "add todo", todo: newTodo });
          setNewTodo("");
        }
      }}
      value={newTodo}
    />
  );
}
