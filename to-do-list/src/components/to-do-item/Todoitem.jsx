import React from "react";
import "./Todoitem.css";
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa";
import { BiUndo } from "react-icons/bi";

function Todoitem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="custom-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>

      <div className="button-container">
        <button onClick={() => onDelete(todo.id)}>
          <FaTrash style={{ color: "red" }} />
        </button>
      </div>
    </li>
  );
}

export default Todoitem;
