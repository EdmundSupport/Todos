import React from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoEmpty } from "../TodoEmpty";

function AppUI() {
  const { error, loading, searchedTodos, deleteTodo, completeTodo, openModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <TodoEmpty />}

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
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
