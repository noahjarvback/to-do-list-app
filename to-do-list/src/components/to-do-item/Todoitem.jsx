import React from "react";
import "./Todoitem.css";
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa";
import { BiUndo } from "react-icons/bi";

function Todoitem({ todo, onToggleComplete, onDelete }) {
  console.log(todo);
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
        {/* <button onClick={() => onToggleComplete(todo.id)}>
            {todo.completed ? (
              <BiUndo style={{ color: "blue", fontSize: "22px" }} />
            ) : (
              <FaCheck style={{ color: "green", fontSize: "22px" }} />
            )}
          </button> */}
        <button onClick={() => onDelete(todo.id)}>
          <FaTrash style={{ color: "red", fontSize: "22px" }} />
        </button>
      </div>
    </li>
  );
}

export default Todoitem;
