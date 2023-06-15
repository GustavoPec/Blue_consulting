import { styled } from "styled-components";

export const Main = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide {
    height: 150px;
  }
`;
