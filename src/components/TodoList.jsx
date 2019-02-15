import React from "react";
import { useMappedState } from "redux-react-hook";
import TodoItem from "./TodoItem.jsx";

const mapState = state => ({
  lastUpdated: state.lastUpdated,
  todoCount: state.todos.length
});

export default function TodoList() {
  const { lastUpdated, todoCount } = useMappedState(mapState);

  return (
    <div>
      <div>You have {todoCount} todos</div>
      <ul>
        {new Array(todoCount).fill(null).map((_, index) => (
          <TodoItem index={index} key={index} />
        ))}
      </ul>
      <div>
        Last updated: {lastUpdated ? new Date(lastUpdated).toString() : "never"}
      </div>
    </div>
  );
}
