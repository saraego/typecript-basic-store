import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.dark};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerItens = styled.div`
  height: 70%;
  border-radius: 0.2rem;
  background-color: #373737;
  padding: 1.562rem 4.687rem;
  display: flex;
  max-width: 37.5rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;


  span{
    margin-top: 2rem;
    color: ${theme.colors.white};
    font-size: 1rem;
  }
`;
