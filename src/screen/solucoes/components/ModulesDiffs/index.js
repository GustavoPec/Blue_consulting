import * as Styles from "./style.js";

export const ModulesDiffs = (props) => {
  return (
    <Styles.Main>
      <Styles.BgDiff background={props.bg}></Styles.BgDiff>
      <Styles.BgInfos>
        <div className="Text">
          <h1>{props.Title}</h1>
          <span>{props.Text}</span>
        </div>
      </Styles.BgInfos>
    </Styles.Main>
  );
};
