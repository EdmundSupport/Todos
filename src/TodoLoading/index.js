import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="TodoLoading-container">
      <span className="TodoLoading-completeIcon"></span>
      <p className="TodoLoading-text">Cargando TODOs...</p>
      <span className="TodoLoading-deleteIcon"></span>
    </div>
  );
}

export { TodoLoading };
