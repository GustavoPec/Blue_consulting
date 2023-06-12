import * as Styles from "./style";
import LogoB from "../../assets/LogoB.png";
import patern3 from "../../assets/paternBG3.png";

export const Footer = () => {
  

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
                <i className="ph ph-facebook-logo"></i>
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
                <span>Inicío</span>
                <span>Sobre nós</span>
                <span>Consultoria SAP</span>
                <span>Soluções</span>
                <span>Contato</span>
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
          </div>
        </div>
      </Styles.Footer>
  );
};
