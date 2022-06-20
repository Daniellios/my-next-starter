import React, { useState } from "react"
import {
  ContentContainer,
  CardsContainer,
  CardContainer,
  CardPicturePart,
  ProductNameTitle,
  ProductVariantTitle,
  ProductVariantSubTitle,
  ProductSlogan,
  ProductWeightCircle,
  UnderCardText,
  BuyLink,
  ContentTitle,
  Stick,
} from "./CardContainerStyles"

import { productTypes } from "../../constants/data"

const Content = () => {
  const [isSelected, setSelected] = useState(
    new Array(productTypes.length).fill(false)
  )

  const [disabledCountdown, setCountDown] = useState(6)

  const [isDisabled, setDisabled] = useState(false)

  const countdownToDisable = () => {
    setCountDown(disabledCountdown - 1)
    if (disabledCountdown === 0) {
      setDisabled(true)
      setTimeout(() => {
        setDisabled(false)
        setCountDown(6)
        setSelected(new Array(productTypes.length).fill(false))
      }, 6000)
    }
  }

  const handleSelect = (cardNumber, statusType) => {
    const updatedSelectState = isSelected.map((item, index) => {
      if (index === cardNumber) {
        item = statusType
      }
      return item
    })
    setSelected(updatedSelectState)
    countdownToDisable()
  }

  return (
    <ContentContainer>
      <ContentTitle>Ты сегодня покормил кота?</ContentTitle>
      <CardsContainer>
        {productTypes.map((product, index) => (
          <CardContainer key={index} area={`card${index + 1}`}>
            <Stick selected={isSelected[index]} isDisabled={isDisabled} />
            <CardPicturePart
              selected={isSelected[index]}
              onClick={() => handleSelect(index, false)}
              isDisabled={isDisabled}
            >
              {isDisabled ? (
                <ProductNameTitle>Сказочное заморское яство</ProductNameTitle>
              ) : isSelected[index] ? (
                <ProductNameTitle red>Котэ не одобряет?</ProductNameTitle>
              ) : (
                <ProductNameTitle>Сказочное заморское яство</ProductNameTitle>
              )}
              <ProductVariantTitle>Нямушка</ProductVariantTitle>
              <ProductVariantSubTitle>{product.flavor}</ProductVariantSubTitle>
              {index === 2 ? (
                <ProductSlogan>
                  <strong>{product.portions}</strong> порций
                  <br />
                  <strong>{product.mice}</strong> в подарок
                  <br />
                  заказчик доволен
                </ProductSlogan>
              ) : (
                <ProductSlogan>
                  <strong>{product.portions}</strong> порций
                  <br />
                  <strong>{product.mice}</strong> в подарок
                </ProductSlogan>
              )}
              <ProductWeightCircle
                selected={isSelected[index]}
                isDisabled={isDisabled}
              >
                {product.weight}
              </ProductWeightCircle>
            </CardPicturePart>
            {isDisabled ? (
              <UnderCardText yellow>{product.disabledText}</UnderCardText>
            ) : isSelected[index] ? (
              <UnderCardText>{product.selectedText}</UnderCardText>
            ) : (
              <UnderCardText>
                Чего сидишь? Порадуй котэ,
                <BuyLink onClick={() => handleSelect(index, true)}>
                  купи.
                </BuyLink>
              </UnderCardText>
            )}
          </CardContainer>
        ))}
      </CardsContainer>
    </ContentContainer>
  )
}

export default Content
