import styled from "styled-components";
import bannerFooter from "../../assets/BannerFooter.png";

export const Footer = styled.div`
  height: 443px;
  width: 100%;
  background-image: url(${bannerFooter});
  background-position: right center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    height: 900px;
    background-size: cover;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding: 20px;
    height: 500px;
    background-size: cover;
  }

  .FooterPattern {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .Border {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -125px;
    background-image: linear-gradient(to bottom, #005c83 51.4%, transparent 0%);
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 130px;

    img {
      width: 170px;
      height: 170px;
    }
  }

  .Footer {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }

  .Links {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 50px;

    img {
      cursor: pointer;
    }

    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
      justify-content: start;
      flex-direction: column;
      padding-left: 20px;
      padding-top: 150px;
    }
  }

  .Box {
    border-left: 2px solid white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 5px;
    color: white;
    width: auto;

    span {
      cursor: pointer;
      width: auto;
    }

    p {
      font-weight: bold;
    }
  }

  .FooterLinksImg {
    display: flex;
    flex-direction: column;
    gap: 30px;

    img {
      @media (max-width: 767px) {
        width: 250px;
      }
    }
  }

  .Icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;

    i {
      font-size: 38px;
      color: white;
      cursor: pointer;
    }
  }
`;
