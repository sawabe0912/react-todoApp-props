import React, { useState } from "react";

function Form(props) {
  const [todo, setTodo] = useState("");

  function submitTodo(e) {
    e.preventDefault();
    if (todo !== "") {
      props.onAdd(todo);
    }
    setTodo("");
  }

  return (
    <form className="create-note" onSubmit={submitTodo}>
      <h2>Add Item</h2>
      <input
        name="text"
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter here"
        value={todo}
        className="input"
      />
    </form>
  );
}

export default Form;
