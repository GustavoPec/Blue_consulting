import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import * as Styles from "./style";

export const Contato = () => {
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
            action="https://formsubmit.co/gustavogamerhg@gmail.com"
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
        </Styles.Forms>
      </Styles.Container>
      <Footer />
    </Styles.Main>
  );
};
