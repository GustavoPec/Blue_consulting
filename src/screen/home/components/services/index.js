import * as Styles from "./style";
// import Logo from "../../assets/Logo.svg"

export const Services = (props) => {
  return (
    <Styles.Main>
      <div className="Dot" />
      <span>{props.text}</span>
      <div className="Button">Saiba Mais</div>
    </Styles.Main>
  );
};
