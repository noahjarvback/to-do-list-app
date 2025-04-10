import React, { useState } from "react";
import "./Form.css";

function Form({ onAdd }) {
  const [text, setText] = useState("");

  function AddToDo(e) {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  }
  return (
    <div>
      <form onSubmit={AddToDo}>
        <input
          className="input-text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Skriv din to-do"
        ></input>
        <button type="submit">Lägg till</button>
      </form>
    </div>
  );
}

export default Form;
