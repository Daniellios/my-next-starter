import styled from "styled-components"

const handleColorType = (color) => {
  switch (color) {
    case "purple":
      return `color:${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.darkpurple};
      &:hover{
        background: ${(props) => props.theme.colors.lightpurple};
      }`
    case "red":
      return `color:${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.brightred};
      &:hover{
        background: ${(props) => props.theme.colors.lightred};
      }`
    case "darkgray":
      return `color: '#888EB0' ;
      background: '#373B53';
      &:hover{
        color: '#888EB0';
        background: ${(props) => props.theme.colors.black};
      }`

    case "addbtn":
      return `color:${(props) => props.theme.colors.bluegray};
        background: ${(props) => props.theme.colors.white};
        &:hover{
            background: ${(props) => props.theme.colors.lightgrayblue};
        }`
    default:
      return "color: #000; background: #eee;"
  }
}

export const Button = styled.button`
  ${({ color }) => handleColorType(color)};
`
