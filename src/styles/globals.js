import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.black};
    cursor: default;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./bg.png");
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.black};

  }
  h1 {
    color: ${(props) => props.theme.colors.black};
    font-size: 3rem;
    font-weight: 700;
  }
  h2 {
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
    font-size: 1.5rem;
  }
  h3 {
    color: ${(props) => props.theme.colors.gray};
    font-weight: 400;
    font-size: 1rem;
    text-transform: none;
  }
  p{
    color: ${(props) => props.theme.colors.gray};
    font-weight: 600;
    font-size: 14px;
  }
  span{
    color: ${(props) => props.theme.colors.gray};
    font-weight: 900;
    font-size: 14px;
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
