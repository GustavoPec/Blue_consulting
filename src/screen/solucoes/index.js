import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ProjectsL } from "./components/projetsDotsLeft";
import Compras from "../../assets/Icons/Compras.png";
import Perfil from "../../assets/Icons/perfil.png";
import Contrato from "../../assets/Icons/contrato.png";
import Fluxo from "../../assets/Icons/fluxo.png";
import Nfe from "../../assets/Icons/Nfe.png";
import * as Styles from "./style";
import { ModulesDiffs } from "./components/ModulesDiffs";

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
              <h1>Soluções</h1>
              <span>
                Aumente a eficiência dos seus processos, alavancando a{" "}
                <strong>confiabilidade de seus negócios integrados</strong> e
                obtendo os melhores resultados.
              </span>
            </div>
            <div className="SolucoesProjs">
              <ProjectsL Title="PERFIS DE ACESSO" img={Perfil} />
              <ProjectsL Title="MÓDULOS DE CONTRATOS" img={Contrato} />
              <ProjectsL Title="SOLUÇÕES NFe" img={Nfe} />
              <ProjectsL Title="FLUXO DE CAIXA" img={Fluxo} />
              <ProjectsL
                Title="AUTOMATIZAÇÃO DA COTAÇÃO DE COMPRAS"
                img={Compras}
              />
            </div>
          </Styles.SolucoesContent>
          <Styles.ContainerInfos />
        </Styles.ContainerSolucoes>
        {/* <Styles.ContainerSolucoes>
          <Styles.ContainerInfos>
            <div className="Infos">
              <div className="SolucoesText">
                <div className="SolucoesTitle">
                  
                </div>
                <div className="SolucoesSubText">
                  
                </div>
              </div>

              <div className="ModuleSolucoes">
                <ProjectsL Title="PERFIS DE ACESSO" img={Perfil} />
                <ProjectsL Title="MÓDULOS DE CONTRATOS" img={Contrato} />
                <ProjectsL Title="SOLUÇÕES NFe" img={Nfe} />
                <ProjectsL Title="FLUXO DE CAIXA" img={Fluxo} />
                <ProjectsL
                  Title="AUTOMATIZAÇÃO DA COTAÇÃO DE COMPRAS"
                  img={Compras}
                />
              </div>
            </div>
          </Styles.ContainerInfos>
        </Styles.ContainerSolucoes> */}
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
              Text="Proposta em no máximo 3 dias úteis."
            />
          </div>
        </Styles.Differentials>
      </Styles.Container>
      <Footer />
    </Styles.Main>
  );
};
