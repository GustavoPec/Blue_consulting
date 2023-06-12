import { styled } from "styled-components";
import BannerConsult from "../../assets/BannerConsult.png";
import BannerConsultLogo from "../../assets/BannerConsultLogo.png";
import paternBG2 from "../../assets/paternBG2.png";
import BannerFooter from "../../assets/BannerFooter.png";

export const Main = styled.div`
  width: 100%;
  height: auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  background-image: url(${paternBG2});
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Consult = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url(${BannerConsult});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 10%;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 900px;
    justify-content: start;
    gap: 0;
  }
`;

export const ConsultText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 40px;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
  }

  .ConsultTextTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: 100%;
    }

    strong {
      color: #0076e2;
    }

    h2 {
      font-size: 52px;
      color: white;

      @media (max-width: 767px) {
        font-size: 30px;
      }
    }

    h1 {
      color: white;
      font-size: 60px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(
        to right,
        #0076e2 0%,
        #0076e2 60%,
        #101e2b 60%,
        #101e2b 90%,
        #0076e2 70%,
        #0076e2 100%
      );
      border-image-slice: 0 0 100% 0;

      @media (max-width: 767px) {
        font-size: 35px;
      }
    }
  }

  .ConsultTextDesc {
    width: 430px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 767px) {
      text-align: center;
      width: 95%;
    }

    span {
      font-size: 20px;
      color: white;

      @media (max-width: 767px) {
        font-size: 19px;
      }
    }
  }
`;

export const ConsultImg = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${BannerConsultLogo});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 470px;

  @media (max-width: 767px) {
    background-size: 300px;
    background-position: top;
    width: 100%;
    height: 700px;
  }
`;

export const ErpSap = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .ErpSapTitle {
    width: auto;
    h1 {
      font-size: 60px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(
        to right,
        #0076e2 0%,
        #0076e2 70%,
        white 70%,
        white 72%,
        #101e2b 72%,
        #101e2b 100%
      );
      border-image-slice: 0 0 100% 0;
    }
  }
`;

export const ErpSapText = styled.div`
  width: 600px;
  text-align: center;

  @media (max-width: 767px) {
    width: 350px;
  }
`;

export const ErpSapDesc = styled.div`
  width: 400px;
  height: 80px;
  text-align: center;
  background: #f1f1f1;
  padding: 15px;
  border-radius: 20px;
  font-weight: bold;
`;

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  background-image: url(${BannerFooter});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
