import { styled } from "styled-components";

export const Main = styled.div`
  width: 210px;
  height: 160px;
  position: relative;
`;

export const BgDiff = styled.div`
  ${(props) => props}
  width: 90px;
  height: 90px;
  border-radius: 60px 10px 0px 10px;
`;

export const BgInfos = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 50px 50px 0px 50px;
  position: absolute;
  top: 11px;
  left: 11px;
  box-shadow: 5px 5px 10px #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Text {
    width: 160px;
    text-align: center;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      width: 135px;
      border: none;
      font-size: 20px;
    }
  }
`;
