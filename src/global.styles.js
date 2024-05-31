import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin :0;
    padding: 20px 40px;
    font-family: "Open Sans Condensed", sans-sarif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, consolas,"courier New",monospace;
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`;
