import * as Styles from "./style";

export const Button = (props) => {
  return <Styles.Main  background= {props.bg} onClick={props.onClick} >{props.text}</Styles.Main>;
};
