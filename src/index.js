import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const port = 21096;
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
