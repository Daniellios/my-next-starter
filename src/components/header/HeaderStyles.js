import styled from "styled-components"

export const Container = styled.div`
  position: sticky;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 103px;
  max-width: 103px;
  height: 100%;
  grid-area: h;
  background-color: #373b53;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const SquareWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 103px;
  position: relative;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 80px;
  }
`

export const SquareUp = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${(props) => props.theme.colors.darkpurple};
`
export const SquareDown = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${(props) => props.theme.colors.lightpurple};
`

export const SquareLogo = styled.img`
  position: absolute;
  z-index: 3;
`

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`

export const ThemeSwither = styled.button`
  background: transparent;
`

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #494e6e;
  padding: 1.5rem 0 0 0;
`

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

export const MoonIcon = styled.img`
  color: white;
`
