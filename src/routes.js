import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screen/home/index.js";
import { Blue } from "./screen/blue/index.js";
import { Consultoria } from "./screen/consultoria/index.js";
import { Contato } from "./screen/contato/index.js";
import { Solucoes } from "./screen/solucoes/index.js";
import { Privacidade } from "./screen/privacidade/index.js";
import { Confirmacao } from "./screen/confirmacao/index.js";

export const RoutesAuth = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Blue />} />
        <Route path="/Consultoria" element={<Consultoria />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Soluções" element={<Solucoes />} />
        <Route path="/Política-Privacidade" element={<Privacidade />} />
        <Route path="/Confirmação-Contato" element={<Confirmacao />} />
      </Routes>
    </Router>
  );
};
