import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    background-color:  ${(props) => props.theme.colors.whitebg};
    color: ${(props) => props.theme.colors.black};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.black};
  }
  h1{
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: -1px;
  }
  h2{
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.63px;
  }
  h3{
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: -0.8px;
  }
  h4{
    font-weight: bold;
    font-size: 12px;
    letter-spacing: -0.25px;
  }

  p{
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.black};
    font-size: 12px;
    font-weight: 400;
    letter-spacing:-0.25px;
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: transparent;
    border-radius: 50px;
    height: 3rem;
    &:hover{
      cursor:poiner;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
  li{
    list-style: none;
  }

`

export default GlobalStyles
