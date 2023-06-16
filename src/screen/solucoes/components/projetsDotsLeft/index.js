import * as Styles from "./style";

export const ProjectsL = (props) => {
  return (
    <Styles.Main>
      <Styles.Dot>
        <img src={props.img} alt="icon" width={props.width} />
      </Styles.Dot>
      <Styles.Line>
        <h1>{props.Title}</h1>
      </Styles.Line>
    </Styles.Main>
  );
};
