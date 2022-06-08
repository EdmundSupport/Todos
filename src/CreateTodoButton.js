import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const OnClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        OnClickButton("Aqui hubo un clic");
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
