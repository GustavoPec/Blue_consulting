import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    body{
            margin: 0;
            padding: 0;
            background: #f1f1f1;
        }

        body, input, textarea, button{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
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
