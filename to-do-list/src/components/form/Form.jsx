import React, { useState } from "react";
import "./Form.css";

function Form({ onAdd }) {
  const [text, setText] = useState("");

  function ChangeValue(input) {
    setText(input);
  }

  function AddToDo(e) {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  }
  return (
    <div>
      <label className="label">Lägg till din todo</label>
      <form onSubmit={AddToDo}>
        <input
          onChange={(e) => ChangeValue(e.target.value)}
          value={text}
          type="text"
          placeholder="Skriv in din to-do uppgift"
        ></input>
        <button type="submit">Lägg till</button>
      </form>
    </div>
  );
}

export default Form;

/*function Form() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function ChangeValue(input) {
    setText(input);
  }

  function AddToDo() {
    setList([...list, text]);
  }

  console.log("render");
  return (
    <div>
      <input
        onChange={(e) => ChangeValue(e.target.value)}
        value={text}
        type="text"
        placeholder="Skriv in din to-do uppgift"
      ></input>
      <button onClick={AddToDo}>Lägg till</button>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;*/
