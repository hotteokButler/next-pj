import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';



export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors?.white};
  }

  a {
    display : block;
    color: inherit;
    text-decoration: none;
  }
`;
