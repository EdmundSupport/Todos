import React from "react";
// import "./App.css";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: true },
//   { text: "Tomar el curso", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Llorar con la llorona 2", completed: true },
// ];

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
