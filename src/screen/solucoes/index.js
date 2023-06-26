import { Footer } from "../../components/Footer/index.js";
import { Navbar } from "../../components/Navbar/index.js";
import { ProjectsL } from "./components/projetsDotsLeft/index.js";
import compras from "../../assets/Icons/CompraIcon.png";
import perfiluser from "../../assets/Icons/PerfilIcon.png";
import contrato from "../../assets/Icons/ContratoIcon.png";
import fluxo from "../../assets/Icons/FluxoIcon.png";
import nfe from "../../assets/Icons/NfeIcon.png";
import quality from "../../assets/Icons/QualityIcon.png";
import production from "../../assets/Icons/ProductionIcon.png";
import key from "../../assets/Icons/KeyIcon.png";
import * as Styles from "./style.js";
import { ModulesDiffs } from "./components/ModulesDiffs/index.js";

export const Solucoes = () => {
  return (
    <Styles.Main>
      <Styles.Navbar>
        <Navbar />
      </Styles.Navbar>
      <Styles.Container>
        <Styles.ContainerSolucoes>
          <Styles.SolucoesContent>
            <div className="SolucoesText">
              <h2>Soluções</h2>
              <span>
                Aumente a eficiência dos seus processos, alavancando a{" "}
                <strong>confiabilidade de seus negócios integrados</strong> e
                obtendo os melhores resultados.
              </span>
            </div>
            <div className="SolucoesProjs">
              <ProjectsL
                Title="PERFIS DE ACESSO"
                img={perfiluser}
                width="40px"
              />
              <ProjectsL
                Title="MÓDULOS DE CONTRATOS"
                img={contrato}
                width="40px"
              />
              <ProjectsL
                Title="AUTOMATIZAÇÃO DA COTAÇÃO DE COMPRAS"
                img={compras}
                width="40px"
              />
              <ProjectsL
                Title="SOLUÇÕES NFE, LOCALIZAÇÃO BRASIL e J1BTAX"
                img={nfe}
                width="40px"
              />
              <ProjectsL Title="FLUXO DE CAIXA" img={fluxo} width="40px" />
              <ProjectsL Title="FORMAÇÃO DE KEY USERS" img={key} width="55px" />
              <ProjectsL Title="MÓDULO PP" img={production} width="40px" />
              <ProjectsL Title="MÓDULO QM" img={quality} width="40px" />
            </div>
          </Styles.SolucoesContent>
          <Styles.ContainerInfos />
        </Styles.ContainerSolucoes>
        <Styles.Differentials>
          <div className="DifferentialsTitle">
            <h1>DIFERENCIAIS DE ESCOLHER A BLUE</h1>
          </div>
          <div className="wrapModules">
            <ModulesDiffs
              bg="#0076e2"
              Title="SENIORIDADE DO TIME"
              Text="Conhecimento avançado em SAP."
            />
            <ModulesDiffs
              bg="#101e2b"
              Title="QUALIDADE DE ENTREGAS"
              Text="No prazo e funcionando."
            />
            <ModulesDiffs
              bg="#0076e2"
              Title="GESTÃO"
              Text="Ágil, flexível e atenta ás necessidades."
            />
            <ModulesDiffs
              bg="#101e2b"
              Title="VELOCIDADE NAS PROPOSTAS"
              Text="Em 24 horas enviaremos sua proposta comercial!"
            />
          </div>
        </Styles.Differentials>
      </Styles.Container>
      <Footer />
    </Styles.Main>
  );
};
