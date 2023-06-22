import { styled } from "styled-components";
import patern1 from "../../assets/paternBG3.png";

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
  justify-content: center;

  background-image: url(${patern1});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 767px) {
    height: 800px;
    justify-content: start;
    padding-top: 40px;
  }
`;

export const ContactTitle = styled.div`
  h1 {
    border-style: solid;
    border-width: 7px;
    border-image: linear-gradient(to right, #0076e2 70%, #101e2b 30%);
    border-image-slice: 0 0 100% 0;
  }
`;

export const Forms = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  border-radius: 40px 40px 40px 0px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 600px;
    gap: 20px;
  }

  form {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .Nome,
    .Email,
    .Telefone,
    .Empresa,
    .Mensagem {
      width: 350px;
      border: 1px solid #c8c8c8;
      padding: 10px;
      border-radius: 3px;
      outline: 0;
    }

    .LGPD {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 350px;

      u {
        cursor: pointer;
      }
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
