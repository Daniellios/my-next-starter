import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background-image: url("/images/oldcloud.svg");
    background-color:  ${(props) => props.theme.colors.background1};
    background-repeat: no-repeat;
    color: ${(props) => props.theme.colors.black};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.primary1};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary1};
  }
  li{
    list-style: none;
  }

`

export default GlobalStyles
