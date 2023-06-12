import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'GOBOLD';
  src: font-url('../assets/Gobold Bold.otf') format('opentype');
  /* Outros formatos de fonte, se necessário */
}

    body{
            margin: 0;
            padding: 0;
        }

        body, input, textarea, button{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'GOBOLD';
  font-weight: 600;
}

button {
    cursor: pointer;
}



html{
  @media (max-width: 36rem) {
  ul {
    grid-template-columns: 1fr;
  }
}
}


`;
