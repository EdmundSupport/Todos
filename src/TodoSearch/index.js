import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { param, setParam } = React.useContext(TodoContext);

  const OnSearchValueChange = (event) => {
    console.log(event.target.value);
    setParam(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={param}
      onChange={OnSearchValueChange}
    />
  );
}

export { TodoSearch };
