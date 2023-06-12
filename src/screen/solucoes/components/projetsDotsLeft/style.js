import { styled } from "styled-components";

export const Main = styled.div`
  width: auto;
  height: 70px;
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    width: 380px;
  }
`;

export const Dot = styled.div`
  width: 70px;
  height: 70px;
  background: #0076e2;
  border-radius: 60px 60px 0px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  height: 70px;
  width: 250px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (max-width: 767px) {
    width: 270px;
  }

  h1 {
    font-size: 18px;
  }
`;
