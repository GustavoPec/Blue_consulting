import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: start;

  .Dot {
    width: 23px;
    height: 23px;
    border: 5px solid #0076e2;
    border-radius: 30px 30px 0px 30px;
    display: flex;
    cursor: pointer;
  }

  .Button {
    width: 130px;
    height: 30px;
    border: 2px solid #0076e2;
    border-radius: 30px 30px 30px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0076e2;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background: #0076e2;
      color: white;
    }

    @media (max-width: 767px) {
      font-size: 15px;
    }
  }

  span {
    color: white;
    font-size: 18px;
    width: 400px;
    padding-left: 10px;
    border-bottom: 2px solid #0076e2;
    cursor: pointer;

    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
`;
