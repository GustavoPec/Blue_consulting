import * as Styles from "./style.js";

export const Button = (props) => {
  return <Styles.Main onClick={props.onClick} >{props.text}</Styles.Main>;
};
