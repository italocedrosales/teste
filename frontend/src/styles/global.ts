import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, html {
    background: linear-gradient(180deg, rgba(93,199,77,1) 0%, rgba(93,199,77,0.67) 100%);
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;
  }
`;
