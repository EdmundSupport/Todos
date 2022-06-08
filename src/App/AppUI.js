import React from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
function AppUI() {
  const { error, loading, searchedTodos, deleteTodo, completeTodo, openModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Ocurrio un error...</p>}
        {loading && <p>Estamos cargando...</p>}
        {!loading && !searchedTodos.length && <p>Cree tu primer TODO!!!</p>}

        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);
              }}
            />
          );
        })}
      </TodoList>
      {openModal && (
        <Modal>
          <p>Teletransportacion</p>
        </Modal>
      )}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
