import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screen/home";
import { Blue } from "./screen/blue";
import { Consultoria } from "./screen/consultoria";
import { Contato } from "./screen/contato";
import { Solucoes } from "./screen/solucoes";
import { Privacidade } from "./screen/privacidade";
import { Confirmacao } from "./screen/confirmacao";

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
