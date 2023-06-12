import * as Styles from "./style";

export const ProjectsR = (props) => {
  return (
    <Styles.Main>
      <Styles.Line>
        <h1>{props.Title}</h1>
        <span>{props.Text}</span>
      </Styles.Line>
      <Styles.Dot>{props.Number}</Styles.Dot>
    </Styles.Main>
  );
};
