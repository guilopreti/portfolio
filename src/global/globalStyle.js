import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

:root {
  --white-fixed: #FFFFFF;
  --turquoise: #01D2D2;
  --black-blue: #010118;
}

html {
  scroll-behavior: smooth;
}

body, html,label,input,textarea {
 font-family: "Inter", sans-serif;
}

h1,h2,h3,h4,h5,h6 {
  font-family: "Lexend", sans-serif;
}

li {
    list-style: none;
}

`;

export default GlobalStyle;
