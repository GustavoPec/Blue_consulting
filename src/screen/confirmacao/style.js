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

  @media (max-width: 767px) {
    height: 600px;
  }
`;

export const Mensage = styled.div`
  max-width: 1400px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    font-size: 60px;
  }

  span {
    font-size: 30px;
  }

  .Text {
    width: auto;
    height: auto;
    text-align: left;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    max-width: 100%;
    flex-direction: column;

    .Text {
      width: 600px;
    }

    h2 {
      font-size: 50px;
    }

    span {
      font-size: 20px;
    }

    img {
      width: 450px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: start;
    padding-top: 30px;

    img {
      width: 350px;
    }

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
