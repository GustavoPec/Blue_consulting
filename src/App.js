import { StrictMode } from "react";
import { RoutesAuth } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <RoutesAuth />
    </StrictMode>
  );
}
