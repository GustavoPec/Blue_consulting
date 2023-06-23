import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  @media (max-width: 820px) {
    height: 900px;
  }
`;

export const Mensage = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 600px;
    border-radius: 100px 100px 100px 0px;
  }

  h2 {
    font-size: 60px;
  }

  span {
    font-size: 30px;
  }

  .Text {
    width: 700px;
    height: auto;
    text-align: left;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    justify-content: center;
    gap: 40px;

    .Text {
      width: 380px;
    }

    h2 {
      font-size: 34px;
    }

    span {
      font-size: 20px;
    }
  }
`;
