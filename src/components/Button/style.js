import styled from "styled-components";

export const Main = styled.div`
  ${(props) => props}
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

  &:hover {
    scale: 1.1;
  }
`;
