import styled from "styled-components";
import { theme } from "../../styles/theme";


export const Container = styled.div`
    background-color: ${theme.colors.dark};
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    .container-left{
        display: flex;
        gap: 1.875rem;
    }

    .container-right{
        display: flex;
        gap: 1.625rem;
        align-items: center;
    }

    .divisoria{
        border: 1px solid #CCC;
        height: 2.5rem;
    }
`

export const ContainerText = styled.div`
    p{
        color: ${theme.colors.button};
        font-weight: 300;
        font-size: 0.875;
    }
`