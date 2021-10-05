import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./styles.css";
import "./responsive.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    const newTask = {
      id: todos.length + 1,
      name: newTodo,
      isCompleted: false
    };
    setTodos((todos) => {
      return [...todos, newTask];
    });
  }

  function deleteTodo(id) {
    const temparr = todos.filter((todo) => id !== todo.id);
    setTodos(temparr);
  }

  function toggleComplete(id) {
    console.log("toggleComplete");
    const updatedItems = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    console.log("updatedItems: ", updatedItems);
    setTodos(updatedItems);
    console.log(todos);
  }

  function editTodo(id, newName) {
    const editedTodoList = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, name: newName };
      }
      return todo;
    });
    setTodos(editedTodoList);
  }

  const todoList = todos.map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      isCompleted={todo.isCompleted}
      toggleCompleted={toggleComplete}
      key={todo.id}
      deleteTodo={deleteTodo}
      editTodo={todo.id}
      editTask={editTodo}
    />
  ));

  return (
    <div className="App">
      <div className="container">
        <Form onAdd={addTodo} />
        <h5>
          <span>{todos.filter((todo) => todo.isCompleted).length}</span> items
          completed
        </h5>
        <ul>{todoList}</ul>
      </div>
    </div>
  );
}
