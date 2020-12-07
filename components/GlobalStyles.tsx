// Vendor
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;

    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    box-sizing: border-box;

    color: #fff;

    &:focus {
      outline: none !important;
    } 
  }

  body {
    background-color: #000;
  }

  a {
    text-decoration: none;
  }
`;
