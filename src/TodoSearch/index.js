import React from "react";
import "./TodoSearch.css";

function TodoSearch({ param, setParam }) {
  // const [param, setParam] = React.useState("");

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
