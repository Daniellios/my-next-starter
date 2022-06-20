import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 10rem;

  @media ${(props) => props.theme.breakpoints.xl} {
    padding-top: 2rem;
  }
`
