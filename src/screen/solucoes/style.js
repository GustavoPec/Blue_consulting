import { styled } from "styled-components";
import Banner from "../../assets/BannerSolucoes.png";

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
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const ContainerSolucoes = styled.div`
  width: 100%;
  height: 650px;
  background-image: url(${Banner});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1600px) {
    min-height: 1000px;
    background-image: url(${Banner});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 767px) {
    background-size: 0%;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 30px;
  width: 70%;
  height: 100%;
  border-radius: 0px 0px 100px 0px;

  @media (min-width: 1600px) {
    justify-content: center;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .SolucoesText {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 767px) {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  .SolucoesTitle {
    width: 180px;
    h1 {
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(to right, #0076e2 70%, #101e2b 30%);
      border-image-slice: 0 0 100% 0;
    }
  }

  .SolucoesSubText {
    width: 320px;
    text-align: left;
    padding-left: 7px;

    @media (max-width: 767px) {
      text-align: center;
      padding-left: none;
    }
  }

  .WarpSolucoes {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    height: 300px;
    width: 650px;

    @media (max-width: 767px) {
      width: 100%;
      height: 400px;
      justify-content: end;
    }
  }
`;

export const Differentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
  height: 600px;
  width: 100%;

  @media (max-width: 767px) {
    height: 1200px;
    justify-content: start;
  }

  .wrapModules {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: center;
    }
  }

  .DifferentialsTitle {
    @media (max-width: 767px) {
      width: 305px;
      text-align: center;
    }
    h1 {
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(
        to right,
        #0076e2 0%,
        #0076e2 50%,
        white 50%,
        white 53%,
        #101e2b 53%,
        #101e2b 100%
      );
      border-image-slice: 0 0 100% 0;
    }
  }
`;
