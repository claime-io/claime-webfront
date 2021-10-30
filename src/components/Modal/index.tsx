import React, { ReactNode, VFC } from 'react'
import { bgGradientSrc } from 'src/assets/images'
import { CloseIcon } from 'src/assets/svgs'
import { white } from 'src/styles/colors'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import styled, { SimpleInterpolation } from 'styled-components'

export type ModalProps = {
  isOpen: boolean
  closeModal?: () => void
  styles?: SimpleInterpolation
}

export const Modal: VFC<ModalProps & { children: ReactNode }> = ({
  isOpen,
  styles,
  closeModal,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <Container>
          <OverlayGradient />
          <Overlay />
          <div onClick={(e) => e.stopPropagation()}>
            <Contents styles={styles}>
              <div>{children}</div>
            </Contents>
          </div>
          {closeModal && (
            <CloseButton onClick={closeModal}>
              <CloseIcon />
            </CloseButton>
          )}
        </Container>
      )}
    </>
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
const Container = styled.div`
  ${flexCenter};
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 1000;

  color: ${white};
`

const Contents = styled.div<{ styles?: SimpleInterpolation }>`
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
    ${({ styles }) => styles};
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
