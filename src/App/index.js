import React from "react";
// import "./App.css";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Llorar con la llorona 2", completed: true },
];

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [param, setParam] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!param.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      console.log(param);
      const paramText = param.toLowerCase();
      return todoText.includes(paramText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      param={param}
      setParam={setParam}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
