import * as Styles from "./style.js";
import LogoB from "../../assets/LogoB.png";
import patern3 from "../../assets/paternBG3.png";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  let navigate = useNavigate();

  return (
    <Styles.Footer>
      <div className="FooterPattern">
        <div className="Border">
          <img src={patern3} alt="Logo" />
        </div>
      </div>
      <div className="Footer">
        <div className="Links">
          <div
            className="FooterLinksImg"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="200"
            data-aos-easing="linear"
          >
            <img
              src={LogoB}
              alt="Logo"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />
            <div className="Icons">
              <i
                className="ph ph-instagram-logo"
                onClick={() => {
                  window.open("https://www.instagram.com/blueconsulting_erp");
                }}
              ></i>
              <i
                className="ph ph-linkedin-logo"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/blue-consulting-erp-sap/"
                  );
                }}
              ></i>
            </div>
          </div>
          <div
            className="FooterLinks"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="200"
            data-aos-easing="linear"
          >
            <div className="Box">
              <p>Blue Consulting</p>
              <span
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                Inicío
              </span>
              <span
                onClick={() => {
                  navigate("/Sobre");
                  window.scrollTo(0, 0);
                }}
              >
                Sobre nós
              </span>
              <span
                onClick={() => {
                  navigate("/Consultoria");
                  window.scrollTo(0, 0);
                }}
              >
                Consultoria SAP
              </span>
              <span
                onClick={() => {
                  navigate("/Soluções");
                  window.scrollTo(0, 0);
                }}
              >
                Soluções
              </span>
              <span
                onClick={() => {
                  navigate("/Contato");
                  window.scrollTo(0, 0);
                }}
              >
                Contato
              </span>
              <span
                onClick={() => {
                  navigate("/Política-Privacidade");
                  window.scrollTo(0, 0);
                }}
              >
                Política de Privacidade
              </span>
            </div>
          </div>
          <div
            className="FooterLinks"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="200"
            data-aos-easing="linear"
          >
            <div className="Box">
              <p>Contato</p>
              <span>contato@blueconsulting.tec.br</span>
            </div>
          </div>
          <div
            className="Box"
            data-aos="fade-right"
            data-aos-delay="1200"
            data-aos-duration="200"
            data-aos-easing="linear"
          >
            <p>Desenvolvimento</p>
            <span
              onClick={() => {
                window.open("https://www.gustavofront.com.br/");
                window.scrollTo(0, 0);
              }}
            >
              <u>Gustavo Peçanha</u>
            </span>
          </div>
        </div>
      </div>
    </Styles.Footer>
  );
};
