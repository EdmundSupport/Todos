import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const OnComplete = () => {
    alert("Todo completado: " + props.text);
  };

  const OnDelete = () => {
    alert("Todo eliminado:  " + props.text);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={OnComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={OnDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
