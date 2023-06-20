import * as Styles from "./style";
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
            <img src={LogoB} alt="Logo" />
            <div className="Icons">
              <i className="ph ph-instagram-logo"></i>
              <i className="ph ph-linkedin-logo"></i>
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
                }}
              >
                Inicío
              </span>
              <span
                onClick={() => {
                  navigate("/Sobre");
                }}
              >
                Sobre nós
              </span>
              <span
                onClick={() => {
                  navigate("/Consultoria");
                }}
              >
                Consultoria SAP
              </span>
              <span
                onClick={() => {
                  navigate("/Soluções");
                }}
              >
                Soluções
              </span>
              <span
                onClick={() => {
                  navigate("/Contato");
                }}
              >
                Contato
              </span>
              <span
                onClick={() => {
                  navigate("/Política-Privacidade");
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
