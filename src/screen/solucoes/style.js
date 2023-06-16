import { styled } from "styled-components";
import Banner from "../../assets/BannerSolucoes.png";
import paternBG3 from "../../assets/paternBG3.png";

export const Main = styled.div`
  width: 100%;
  height: auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  background-image: url(${paternBG3});
  background-position: center;
  background-repeat: repeat-x repeat-y;
  background-attachment: fixed;
  background-size: 20%;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
`;

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerSolucoes = styled.div`
  width: 1100px;
  height: 800px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SolucoesContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  align-items: start;

  @media (max-width: 767px) {
    align-items: center;
    width: 100%;
  }

  .SolucoesText {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 250px;

    @media (max-width: 767px) {
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    h1 {
      width: 180px;
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(to right, #0076e2 70%, #101e2b 30%);
      border-image-slice: 0 0 100% 0;
    }

    span {
      padding-left: 7px;

      @media (max-width: 767px) {
        text-align: center;
        width: 310px;
      }
    }
  }

  .SolucoesProjs {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const ContainerInfos = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${Banner});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 767px) {
    display: none;
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
    height: 1150px;
    justify-content: start;
    background-attachment: fixed;
    background-position: center;
    background-size: 90%;
    background-repeat: repeat-y;
  }

  .wrapModules {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: center;
      flex-direction: column;
    }
  }

  .DifferentialsTitle {
    @media (max-width: 767px) {
      width: 400px;
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
