import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Todoitem from "./components/to-do-item/Todoitem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }
  return (
    <>
      <h2>Min To-do lista</h2>
      <Form onAdd={addTodo} />
      <Todoitem todos={todos} />
    </>
  );
}

export default App;
