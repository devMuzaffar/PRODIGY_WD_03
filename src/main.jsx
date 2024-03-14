import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {OpponentProvider} from "./context/OpponentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OpponentProvider>
      <App />
    </OpponentProvider>
  </React.StrictMode>
);
