import { useNavigate } from "react-router-dom";
import * as Styles from "./style.js";
// import Logo from "../../assets/Logo.svg"

export const Services = (props) => {
  let navigate = useNavigate();

  return (
    <Styles.Main>
      <div className="Dot" />
      <span>{props.text}</span>
      <div
        className="Button"
        onClick={() => {
          navigate("/Soluções");
        }}
      >
        Saiba Mais
      </div>
    </Styles.Main>
  );
};
