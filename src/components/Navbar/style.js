import styled from "styled-components";

export const Main = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 140px;
  z-index: 1;

  img {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 100%;
    gap: 0;
    justify-content: space-around;
  }

  .MenuBar {
    display: none;

    @media (max-width: 767px) {
      display: block;
    }
    i {
      color: black;
      font-size: 32px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    font-size: 20px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    transition: 0.2s;
    height: 30px;

    &:hover {
      border-bottom: 2px solid #0076e2;
    }
  }

  select {
    border-style: none;
    background: #f7f7f7;
  }

  option {
    border-style: none;
  }

  .Contato {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    background: #0076e2;
    color: white;
    border-radius: 30px 30px 30px 0px;
    transition: 0.2s;
    animation: linear;
    font-weight: bold;
    margin-left: 20px;

    &:hover {
      scale: 1.1;
    }
  }

  .Button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .Selector {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }
`;
