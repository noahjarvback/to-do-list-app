import React, { useState } from "react";

function Form() {
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
      <div>Form</div>

      <input
        onChange={(e) => ChangeValue(e.target.value)}
        value={text}
        type="text"
        placeholder="Whats the task title?"
      ></input>
      <button onClick={AddToDo}>Add</button>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
