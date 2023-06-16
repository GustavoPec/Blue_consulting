import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'GOBOLD';
  src: font-url('../assets/Gobold Bold.otf') format('opentype'),
   font-url('../assets/Gobold Bold.otf') format('woff'),
   font-url('../assets/Gobold Bold.otf') format('truetype');
}

/* @font-face{
    font-family:"GOBOLD";
    src: font-url("https://candyfonts.com/wp-data/2019/03/22/41942/GoboldBold.ttf") format("woff"),
    font-url("https://candyfonts.com/wp-data/2019/03/22/41942/GoboldBold.ttf") format("opentype"),
    font-url("https://candyfonts.com/wp-data/2019/03/22/41942/GoboldBold.ttf") format("truetype");
} */

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
