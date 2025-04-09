import React from "react";
import Todoitem from "../to-do-item/Todoitem";
import "./Todolist.css";
function TodoList({ todos, onToggleComplete, onDelete }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
