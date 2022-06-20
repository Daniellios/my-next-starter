import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  height: 100%;
  margin: auto 0;
`

export const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-areas: "card1 card2 card3";
  grid-template-columns: repeat(3, 320px);
  grid-template-rows: 509px;
  column-gap: 5rem;
  margin: 2rem;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-areas:
      ". card1 ."
      "card2 . card3";
    grid-template-rows: 380px 380px;
    column-gap: 0rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 320px;
    grid-template-areas:
      "card1"
      "card2"
      "card3";
    grid-template-rows: repeat(3, 340px);
    row-gap: 2rem;
  }
`

export const ContentTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 100;
  text-align: center;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.4rem;
  }
`

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  row-gap: 1rem;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.area};
  flex-direction: column;
`

export const ProductWeightCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) =>
    props.selected ? props.theme.colors.select : props.theme.colors.blue};
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  font-size: 2rem;
  width: 5rem;
  height: 5rem;
  bottom: 1rem;
  right: 1rem;
  transition: all 0.1s linear;
  word-spacing: 30px;

  ${(props) =>
    props.isDisabled
      ? `
      background: ${props.theme.colors.gray};

  `
      : ``};
`

export const CardPicturePart = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  border: 4px solid
    ${(props) =>
      props.selected ? props.theme.colors.select : props.theme.colors.blue};
  border-radius: 0 12px 12px 12px;
  padding: 1.4rem 3rem;
  background-image: url("./cat.png"),
    linear-gradient(
      135deg,
      transparent 45px,
      ${(props) => props.theme.colors.white} 0
    );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  transition: border-color 0.1s linear;
  clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0 100%, 0 10.5%);

  &: hover {
    border-color: ${(props) =>
      props.selected
        ? props.theme.colors.selectHover
        : props.theme.colors.blueHover};
  }

  &: hover ${ProductWeightCircle} {
    background: ${(props) =>
      props.selected
        ? props.theme.colors.selectHover
        : props.theme.colors.blueHover};
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    background-size: 70%;
    background-position: bottom -3rem left -1rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    background-size: 80%;
    background-position: bottom -6rem left -1rem;
  }

  ${(props) =>
    props.isDisabled
      ? `
      &:after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(255, 255, 255, 0.5); 
        top: 0;
        left: 0;
      }

      border-color: ${props.theme.colors.gray};
      &: hover{
        border-color: ${props.theme.colors.gray};
      }

      &: hover ${ProductWeightCircle} {
        background: ${props.theme.colors.gray};
      }
  `
      : ``};
`

export const Stick = styled.div`
  position: absolute;
  top: 24px;
  left: -10px;
  z-index: 6;
  height: 5px;
  width: 70px;
  border-radius: 3px;
  transform: rotate(-46deg);
  transition: background 0.1s linear;
  background: ${(props) =>
    props.selected ? props.theme.colors.select : props.theme.colors.blue};
  background: ${(props) => (props.isDisabled ? props.theme.colors.gray : "")};

  @media ${(props) => props.theme.breakpoints.xl} {
    top: 17px;
    width: 60px;
    left: -6px;
    transform: rotate(-39deg);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    top: 14px;
    width: 56px;
    left: -4px;
    transform: rotate(-34deg);
  }
`

export const ProductNameTitle = styled.h3`
  color: ${(props) =>
    props.red ? props.theme.colors.select : props.theme.colors.gray};
`

export const ProductVariantTitle = styled.h1``

export const ProductVariantSubTitle = styled.h2`
  text-transform: none;
`

export const ProductSlogan = styled.p`
  margin-top: 1rem;
  font-weight: 500;
  line-height: 16px;
  white-space: pre-line;
`

export const UnderCardText = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: ${(props) =>
    props.yellow ? props.theme.colors.yellow : props.theme.colors.white};
`

export const BuyLink = styled.a`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: underline;
  text-decoration-style: dashed;

  &: hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.blueHover};
  }
`
