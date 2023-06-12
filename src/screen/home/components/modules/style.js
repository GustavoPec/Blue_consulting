import styled from "styled-components";

export const Main = styled.div`
  width: 330px;
  height: 160px;
  border: 2px solid black;
  border-radius: 0px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    bottom: 140px;
    left: 25px;
    background: #f7f7f7;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 8px solid #f7f7f7;
    border-right: 8px solid #f7f7f7;
  }

  span {
    padding: 40px;
    display: flex;
    align-items: end;
    justify-content: end;
    text-align: left;
    width: auto;
    height: auto;
  }
`;
