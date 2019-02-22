import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    color: #333;
    text-decoration: none;
  }
  .text-center {
    text-align: center;
  }
`

export default GlobalStyles;
