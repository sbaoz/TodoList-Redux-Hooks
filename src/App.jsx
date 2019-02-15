import React from "react";
import TodoInput from "../src/components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
