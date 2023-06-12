import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screen/home";
import { Blue } from "./screen/blue";
import { Consultoria } from "./screen/consultoria";
import { Contato } from "./screen/contato";
import { Solucoes } from "./screen/solucoes";

export const RoutesAuth = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blue" element={<Blue />} />
        <Route path="/Consultoria" element={<Consultoria />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Soluções" element={<Solucoes />} />
      </Routes>
    </Router>
  );
};
