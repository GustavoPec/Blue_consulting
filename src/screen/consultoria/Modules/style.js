import { styled } from "styled-components";

export const Main = styled.div`
  cursor: grab;
  [class^="slide"],
  [class*=" slide"] {
    height: 250px;

    @media (max-width: 767px) {
    }
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 767px) {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
