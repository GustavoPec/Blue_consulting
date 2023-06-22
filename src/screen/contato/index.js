import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import * as Styles from "./style";

export const Contato = () => {
  let Navigate = useNavigate();

  return (
    <Styles.Main>
      <Styles.Navbar>
        <Navbar />
      </Styles.Navbar>
      <Styles.Container>
        <Styles.Forms>
          <Styles.ContactTitle>
            <h1>ENTRE EM CONTATO</h1>
          </Styles.ContactTitle>
          <form
            action="https://formsubmit.co/contato@blueconsulting.tec.br"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              className="Nome"
              type="text"
              name="Nome"
              placeholder="Nome Completo"
              required
              autoComplete="off"
            />

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
              className="Mensagem"
              type="text"
              name="Mensagem"
              placeholder="Mensagem"
              required
              autoComplete="off"
            />

            <input
              type="hidden"
              name="_next"
              value="https://blue-consulting-sigma.vercel.app/Confirma%C3%A7%C3%A3o-Contato"
            />
            <div className="LGPD">
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
                  <u
                    onClick={() => {
                      Navigate("/Política-Privacidade");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Politica de Privacidade
                  </u>
                  .
                </span>
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </Styles.Forms>
      </Styles.Container>
      <Footer />
    </Styles.Main>
  );
};
