import styled from "styled-components";
import bannerSAP from "../../assets/BannerSAP.png";
import bannerSAPMobile from "../../assets/BannerMobile.png";
import bannerInfo from "../../assets/BannerProj.png";
import patern1 from "../../assets/paternBG1.png";
import patern2 from "../../assets/paternBG2.png";

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;

  .Navbar {
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7f7;
  }
`;

export const Introduction = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-image: url(${bannerSAP});
  background-attachment: fixed;
  background-position: center right 50%;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 30px;

  @media (min-width: 2560px) {
    background-image: url(${bannerSAP});
    background-attachment: fixed;
    background-position: center top -40%;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: 767px) {
    gap: 20px;
    background-position: left;
    background-image: url(${bannerSAPMobile});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .Intro {
    width: 40%;
    display: flex;
    justify-content: end;
    align-items: end;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: center;
    }
  }

  .SpaceText {
    width: 470px;
    gap: 20px;
    display: flex;
    flex-direction: column;

    h2 {
      line-height: 60px;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      gap: 20px;

      h2 {
        width: 325px;
        font-size: 40px;
        line-height: 50px;
      }
      span {
        width: 365px;
      }
    }

    span {
      color: white;
      font-size: 16px;
    }
  }

  .Button {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  h2 {
    color: white;
    font-size: 50px;
  }
`;

export const Consultancy = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${patern1});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    height: 900px;
    gap: 20px;
  }

  .Intro {
    text-align: center;
    span {
      font-size: 36px;
    }
    h2 {
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(to right, #0076e2 70%, #101e2b 30%);
      border-image-slice: 0 0 100% 0;

      @media (max-width: 767px) {
        display: flex;
        width: 280px;
        line-height: 50px;
      }
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 330px;
    }
  }

  .Modules {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export const Projects = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url(${bannerInfo});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 90px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 600px;
    gap: 20px;
    justify-content: space-evenly;
  }

  .InfoTitle {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: 100%;
      text-align: center;
    }

    span {
      font-size: 35px;
      width: 100%;
    }

    h2 {
      display: flex;
      width: auto;
      font-size: 70px;
      background-image: linear-gradient(to top, #0076e2 35px, transparent 0%);

      @media (max-width: 767px) {
        width: auto;
        text-align: center;
        font-size: 50px;
        background-image: linear-gradient(to top, #0076e2 20px, transparent 0%);
      }
    }
  }

  .Service {
    width: 630px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: 767px) {
      width: 95%;
      height: auto;
      justify-content: center;
    }
  }
`;

export const Forms = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${patern2});
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50%;
  gap: 90px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 1300px;
    gap: 0;
    background-position: right;
    background-size: 70%;
    justify-content: start;
  }

  .FormTitle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;

    @media (max-width: 767px) {
      justify-content: center;
      align-items: start;
      height: auto;
      padding: 20px;
      gap: 20px;
    }

    h2 {
      font-size: 70px;
      color: #0076e2;

      @media (max-width: 767px) {
        font-size: 50px;
      }
    }

    span {
      font-size: 35px;
    }

    ul {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 20px;
    }

    li::before {
      content: "•";
      color: #0076e2;
      scale: 10px;
      font-size: 40px;
    }
  }

  .TextForm {
    width: 440px;
    line-height: 30px;

    @media (max-width: 767px) {
      width: 310px;
    }
  }

  .FormSpace {
    width: 400px;
    height: 520px;
    background: white;
    border-radius: 15px 15px 15px 0px;
    box-shadow: -4px 4px 16px #cccccc;
  }

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;

    .Nome,
    .TamEmpresa,
    .Modulos,
    .Perfil,
    .ProjTemp {
      width: 350px;
    }

    .Email,
    .Telefone,
    .Empresa,
    .Cargo {
      width: 172.2px;
    }

    .Email,
    .Telefone,
    .Empresa,
    .Cargo,
    .Nome,
    .TamEmpresa,
    .Modulos,
    .Perfil,
    .ProjTemp {
      border: 1px solid #c8c8c8;
      padding: 10px;
      border-radius: 3px;
      outline: 0;
    }

    .InfosWrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 7px;
      width: auto;
    }

    .LGPD {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 350px;
    }

    .LgpdAgree {
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 5px;
    }

    button {
      background: #0076e2;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 40px;
      color: white;
      border: none;
      border-radius: 30px 30px 30px 0px;
      transition: 0.2s;
      animation: linear;
      font-weight: bold;
      margin-left: 20px;
      cursor: pointer;

      &:hover {
        scale: 1.1;
      }
    }
  }
`;
