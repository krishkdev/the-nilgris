import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
    html, body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    } 
    body {
        font-family: 'Poppins', sans-serif;
        height:100vh;
        text-rendering: optimizeLegibility;
    }
    section {
        position: absolute;
        right: 0;
        width: 100%;
        min-height: 100vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(30, 35, 61);
        color: #fff;
        z-index: 2;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        section {
            padding: 40px;
        }
    }
`;
