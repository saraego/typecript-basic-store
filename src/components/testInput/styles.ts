import styled from "styled-components"
import { theme } from "../../styles/theme"


export const Input = styled.input`
  max-width: 24.416rem;
  width: 100%;
  height: 4vh;
  border-radius: 0.375rem;
  padding-left: 0.625rem;
  border: none;
`

export const Label = styled.label`
  margin-top: 1rem;
  color: ${theme.colors.white};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const MessageErro = styled.span`
margin-top: 0.05rem;
color: ${theme.colors.error};
`