import { styled } from "styled-components";

export const Main = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
  }

  .keen-slider {
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 90%;
    }
  }
`;
