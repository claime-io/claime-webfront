import React, { ReactNode, VFC } from 'react'
import { bgGradientSrc } from 'src/assets/images'
import { CloseIcon } from 'src/assets/svgs'
import { white } from 'src/styles/colors'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import styled, { css, SimpleInterpolation } from 'styled-components'

export type ModalProps = {
  isOpen: boolean
  closeModal?: () => void
  styles?: ModalStyleProps
}

export const Modal: VFC<ModalProps & { children: ReactNode }> = ({
  isOpen,
  closeModal,
  styles,
  children,
}) => {
  return (
    <Container isOpen={isOpen} {...styles}>
      <OverlayGradient />
      <Overlay />
      <div onClick={(e) => e.stopPropagation()}>
        <ContentsContainer>
          <div>{children}</div>
        </ContentsContainer>
      </div>
      {closeModal && (
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
      )}
    </Container>
  )
}
const CloseButton = styled.button`
  position: fixed;
  top: 32px;
  right: 32px;
`
const OverlayGradient = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  background-image: url(${bgGradientSrc});
  background-size: cover;
  opacity: 0.75;
`
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  background-color: #000000bf;
`
const ContentsContainer = styled.div`
  max-width: 640px;
  max-height: 85vh;
  width: 95vw;
  padding-right: 24px;
  padding-left: 24px;
  position: relative;
  > div {
    width: fit-content;
    margin: 0 auto;
    padding: 20px 16px;
    border-radius: 24px;
  }

  @media ${breakpoint.s} {
    > div {
      padding: 40px 32px;
    }
  }

  @media ${breakpoint.m} {
    width: 80vw;
    > div {
      padding: 40px 52px;
      border-radius: 56px;
    }
  }
  @media ${breakpoint.l} {
    width: 100%;
  }
`

export type ModalStyleProps = {
  contentsContainerStyles?: SimpleInterpolation
  overlayStyles?: SimpleInterpolation
  overlayGradientStyles?: SimpleInterpolation
}
const modalCloseStyle = css`
  visibility: hidden;
  opacity: 0;
`
const Container = styled.div<ModalStyleProps & { isOpen: boolean }>`
  ${flexCenter};
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.25s ease-in-out;
  color: ${white};

  ${({
    isOpen,
    contentsContainerStyles,
    overlayStyles,
    overlayGradientStyles,
  }) => css`
    ${!isOpen && modalCloseStyle};
    ${OverlayGradient} {
      ${overlayGradientStyles};
    }
    ${Overlay} {
      ${overlayStyles};
    }
    ${ContentsContainer} {
      > div {
        ${contentsContainerStyles};
      }
    }
  `}
`
