import React from "react";
// import "./App.css";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: true },
//   { text: "Tomar el curso", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Llorar con la llorona 2", completed: true },
// ];

function useLocalStorage(itemName, intialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(intialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App(props) {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
