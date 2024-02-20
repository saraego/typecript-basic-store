import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "./theme";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;
        text-decoration: none;
    }
    a{
        color: ${theme.colors.white};
    }
`