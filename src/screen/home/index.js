import { Navbar } from "../../components/Navbar";
import { Module } from "./components/modules";
import * as Styles from "./style.js";
import Brain from "../../assets/brainIcon.png";
import People from "../../assets/PeopleIcon.png";
import Agree from "../../assets/AgreeIcon.png";
import { Services } from "./components/services";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();

  return (
    <Styles.Main>
      <div className="Navbar">
        <Navbar />
      </div>

      <Styles.Introduction>
        <div className="Intro">
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            className="SpaceText"
          >
            <h2>
              DESENHAMOS E <br /> IMPLEMENTAMOS SAP <br /> PARA O SEU NEGÓCIO
            </h2>
            <br />
            <span>
              Ter uma plataforma tecnológica e integrada reduz a complexidades
              das operações e prepara seu negócio para um crescimento
              sustentável, resiliente e rentável.
            </span>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-easing="linear" className="Button">
          <Button
            onClick={() => {
              navigate("/Soluções");
            }}
            bg="#101e2b"
            text="Saiba mais"
          />
        </div>
      </Styles.Introduction>

      <Styles.Consultancy>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-delay="300"
          className="Intro"
        >
          <span>Veja como podemos</span>
          <h2>TRANSFORMAR O SEU NEGÓCIO</h2>
        </div>

        <div className="Modules">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <Module
              path={Brain}
              text="
              A Tecnologia da Informação desempenha um papel fundamental na transformação de modelos de negócio em diversos setores, incluindo a área de SAP, Gestão e ERP."
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="800"
            data-aos-duration="500"
          >
            <Module
              path={People}
              text="As inovações nesse campo estão conectando pessoas ao redor do mundo, simplificando processos diários e possibilitando o uso mais eficiente dos recursos disponíveis."
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            <Module
              path={Agree}
              text="A Blue Consulting é especializada em auxiliar organizações a gerar valor a longo prazo de forma ágil, capacitando-as a se adaptarem ao futuro e anteciparem-se às mudanças do mercado."
            />
          </div>
        </div>
      </Styles.Consultancy>
      <Styles.Projects>
        <div className="InfoTitle">
          <span>Consultoria em</span>
          <h2>PROJETO SAP</h2>
        </div>
        <div className="Service">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="100"
          >
            <Services text="Projeto de implementação e melhorias" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="200"
          >
            <Services text="Infraestrutura SAP" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            <Services text="SAP S/4 HANA" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Services text="Outsourcing" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <Services text="Suporte AMS" />
          </div>
        </div>
      </Styles.Projects>

      <Styles.Forms>
        <div className="FormTitle">
          <h2>CONTATO</h2>
          <div className="TextForm">
            <span>
              Descubra como a Blue Pode ajudá-lo a{" "}
              <span style={{ fontWeight: "bold" }}>
                descobrir novas oportunidades
              </span>{" "}
              e realizar valor a longo prazo.
            </span>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            <ul>
              <li>Preencha o nosso formulário de solicitação de proposta.</li>
              <li>Temos o compromisso e agilidade que seu negócio precisa.</li>
              <li>Em 24 horas enviaremos sua proposta comercial!</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="linear"
          className="FormSpace"
        >
          <form
            action="https://formsubmit.co/gustavogamerhg@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              className="Nome"
              type="text"
              name="Nome"
              placeholder="Nome"
              required
              autoComplete="off"
            />
            <div className="InfosWrap">
              <input
                className="Email"
                type="email"
                name="E-mail"
                placeholder="Email"
                required
                autoComplete="off"
              />
              <input
                className="Telefone"
                type="text"
                name="Telefone"
                placeholder="Telefone"
                required
                autoComplete="off"
              />
              <input
                className="Empresa"
                type="text"
                name="Empresa"
                placeholder="Empresa"
                required
                autoComplete="off"
              />
              <input
                className="Cargo"
                type="text"
                name="Cargo"
                placeholder="Cargo"
                required
                autoComplete="off"
              />
            </div>
            <input
              className="TamEmpresa"
              type="text"
              name="Tamanho da Empresa"
              placeholder="Tamanho da Empresa"
              required
              autoComplete="off"
            />
            <input
              className="Modulos"
              type="text"
              name="Quais módulos"
              placeholder="Quais módulos"
              required
              autoComplete="off"
            />

            <select
              className="Perfil"
              type="text"
              name="Perfil Profissional"
              placeholder="Perfil Profissional"
              required
              autoComplete="off"
            >
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
              <option value="None">Não se encaixa</option>
            </select>
            <input
              className="ProjTemp"
              type="text"
              name="Tempo de Projeto"
              placeholder="Tempo de Projeto"
              required
              autoComplete="off"
            />
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            {/* <div className="LGPD">
              <div className="LgpdAgree">
                <input
                  required
                  type="checkbox"
                  name="CheckBox"
                  className="CheckBox"
                />
                <span>
                  Eu concordo em receber comunicações <br /> por e-mail
                </span>
              </div>
              <div className="LgpdAgree">
                <input
                  required
                  type="checkbox"
                  name="CheckBox"
                  className="CheckBox"
                />
                <span>
                  Ao informar meus dados eu concordo com <br /> a{" "}
                  <u>Politica de Privacidade</u>.
                </span>
              </div>
            </div> */}
            <button type="submit">Enviar</button>
          </form>
        </div>
      </Styles.Forms>
      <Footer />
    </Styles.Main>
  );
};
