import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CardProvider } from "./context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardProvider>
    <App />
  </CardProvider>
);
