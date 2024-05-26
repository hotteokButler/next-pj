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
    font-family: "Pretendard Variable", Pretendard ,ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace !important;
  }

  a {
    display : block;
    color: inherit;
    text-decoration: none;
  }
`;
