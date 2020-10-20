import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: 'Arial', sans-serif;
        background-color: rgb(237, 237, 237);
    }

    body {
        box-sizing: border-box;
        min-height: 100vh;
        position: relative;
    }

    a {
        text-decoration: none;
        font-size: 1.4rem;
        color: gray;
    }
`;

export default GlobalStyle;