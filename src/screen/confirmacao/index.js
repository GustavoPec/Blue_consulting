import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import * as Styles from "./style";
import Confirm  from "../../assets/Confirmation.png"

export const Confirmacao = () => {
  return (
    <Styles.Main>
      <Styles.Navbar>
        <Navbar />
      </Styles.Navbar>
      <Styles.Container>
        <Styles.Mensage>
          <div className="Text">
            <h2>A BLUE CONSULTING AGRADECE SEU CONTATO!</h2>
            <span>Em até 24 horas entraremos em contato.</span>
          </div>
          <img src={Confirm} alt="Confirmação logo" />
        </Styles.Mensage>
      </Styles.Container>
      <Footer />
    </Styles.Main>
  );
};
