import * as Styles from "./style";

export const ProjectsL = (props) => {
  return (
    <Styles.Main>
      <Styles.Dot>
        {props.Number}
        {props.img}
      </Styles.Dot>
      <Styles.Line>
        <h1>{props.Title}</h1>
        <span>{props.Text}</span>
      </Styles.Line>
    </Styles.Main>
  );
};
