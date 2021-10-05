import React, { useState } from "react";

function Todo(props) {
  console.log("props: ", props);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleEditSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    props.editTask(props.id, newName);
    setNewName("");
    setIsEditing(false);
  }

  function handleEditChange(e) {
    setNewName(e.target.value);
  }

  const editingTemplate = (
    <form onSubmit={handleEditSubmit}>
      <label htmlFor={props.id}>New name for {props.name}: </label>
      <input
        id={props.id}
        type="text"
        value={newName}
        onChange={handleEditChange}
        className="input"
      />
      <button className="updateBtn">Update</button>
    </form>
  );

  const normalTemplate = (
    <div className="note">
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.isCompleted}
          onChange={() => props.toggleCompleted(props.id)}
          className="checkmark"
        />
      </div>
      <div className="text">
        <label
          htmlFor={props.id}
          className={props.isCompleted ? "completed" : "uncomplete"}
        >
          <p
            className={`text ${props.isCompleted ? "completed" : "uncomplete"}`}
          >
            {props.name}
          </p>
        </label>
      </div>
      <div className="rightSymbol">
        <p onClick={() => setIsEditing(true)}>
          <span role="img" aria-label="editmark" className="editmark">
            {" "}
            &#9997;
          </span>
        </p>
        <p onClick={() => props.deleteTodo(props.id)}>
          <span role="img" aria-label="deletemark" className="deletemark">
            {" "}
            &#10060;
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <li className="todo">{isEditing ? editingTemplate : normalTemplate}</li>
  );
}

export default Todo;
