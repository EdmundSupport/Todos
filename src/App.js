import React from "react";
import "./App.css";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
