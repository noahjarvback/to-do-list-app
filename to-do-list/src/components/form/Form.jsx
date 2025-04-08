import React, { useState } from "react";

function Form({ onAdd }) {
  const [text, setText] = useState("");

  function ChangeValue(input) {
    setText(input);
  }

  function AddToDo() {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  }
  return (
    <div>
      <input
        onChange={(e) => ChangeValue(e.target.value)}
        value={text}
        type="text"
        placeholder="Skriv in din to-do uppgift"
      ></input>
      <button onClick={AddToDo}>Lägg till</button>
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
