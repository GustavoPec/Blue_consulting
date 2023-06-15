import React from "react";
import { RoutesAuth } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RoutesAuth />
    </React.StrictMode>
  );
}
