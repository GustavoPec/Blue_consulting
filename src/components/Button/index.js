import * as Styles from "./style";

export const Button = (props) => {
  return <Styles.Main onClick={props.onClick} >{props.text}</Styles.Main>;
};
