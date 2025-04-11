import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/to-do-list/Todolist";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="listwrapping">
        <h2>Min to-do lista</h2>
        <Form onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
