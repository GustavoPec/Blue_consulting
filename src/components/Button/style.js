import styled from "styled-components";

export const Main = styled.div`
  background: #101e2b;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 30px 30px 30px 0px;
  transition: 0.2s;
  animation: linear;
  font-weight: bold;
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 767px) {
    background: #0076e2;
  }

  &:hover {
    scale: 1.1;
  }
`;
