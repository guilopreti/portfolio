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

body {
  background-color: var(--black-blue)
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

.toast-message {
  background: var(--turquoise);
    color: var(--black-blue);
    font-size: 22px;
    width: 35vw;
    max-width: 350px;
    padding: 30px 20px;

    .Toastify__toast-icon {
      svg {
        fill: var(--black-blue)
      }
    }
    
    button {
      color: var(--black-blue);
    opacity: 1;
    }

    .Toastify__progress-bar {
      background: var(--black-blue);
    }
}

`;

export default GlobalStyle;
