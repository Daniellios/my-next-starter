import React from "react"
import {
  Container,
  SquareWrap,
  SquareDown,
  SquareUp,
  SquareLogo,
  ProfileWrap,
  ProfilePic,
  ProfileContainer,
  SwitchContainer,
  ThemeSwither,
  MoonIcon,
} from "./HeaderStyles"

const Header = () => {
  return (
    <Container>
      <SquareWrap>
        <SquareLogo src={"./assets/logo.svg"} />
        <SquareUp />
        <SquareDown />
      </SquareWrap>

      <ProfileWrap>
        <SwitchContainer>
          <ThemeSwither>
            <MoonIcon src={"./assets/icon-moon.svg"} />
          </ThemeSwither>
        </SwitchContainer>
        <ProfileContainer>
          <ProfilePic src={"./assets/profile2.jpg"} />
        </ProfileContainer>
      </ProfileWrap>
    </Container>
  )
}

export default Header
