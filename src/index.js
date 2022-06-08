import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOMPortal from "react-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const modal = document.getElementById("modal");
ReactDOMPortal.createPortal(<App />, modal);
