import * as Styles from "./style.js";
// import Logo from "../../assets/Logo.svg"

export const Module = (props) => {
  return (
    <Styles.Main>
      <img src={props.path} alt="icon" />
      <span>{props.text}</span>
    </Styles.Main>
  );
};
