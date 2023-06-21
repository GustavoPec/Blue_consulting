import { styled } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1000px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;

  h2 {
    padding: 20px;
  }

  span {
    text-align: left;
    padding: 15px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
