import { styled } from "styled-components";

export const Main = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: end;
  padding-left: 9px;

  @media (max-width: 767px) {
    width: 380px;
  }
`;

export const Dot = styled.div`
  width: 110px;
  height: 110px;
  background: #0076e2;
  border-radius: 60px 60px 60px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 70px;
  color: white;
`;

export const Line = styled.div`
  border-bottom: 5px solid #0076e2;
  height: 80px;
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3px;

  @media (max-width: 767px) {
    width: 270px;
  }

  span {
    font-size: 14px;
  }

  h1 {
    font-size: 28px;
  }
`;
