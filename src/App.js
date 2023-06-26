import { StrictMode } from "react";
import { RoutesAuth } from "./routes.js";
import { GlobalStyle } from "./styles/global.js";

export function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <RoutesAuth />
    </StrictMode>
  );
}
