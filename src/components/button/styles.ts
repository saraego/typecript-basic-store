import styled from "styled-components";
import { theme } from "../../styles/theme";

type ContainerProps = {
    $variant: "default" | "outline";
}


export const Container = styled.button<ContainerProps>`
    max-width: 11rem;
    width: 100%;
    height: 2.25rem;
    color: ${theme.colors.white};
    font-size: 1.05rem;
    font-weight: 500;
    background-color: ${props => props.$variant === "default" ? theme.colors.button : "transparent"};
    border-radius: 1.25rem;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }
`