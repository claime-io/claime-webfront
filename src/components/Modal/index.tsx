import React, { ReactNode, VFC } from 'react'
import { black, white } from 'src/styles/colors'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import styled, { css, SimpleInterpolation } from 'styled-components'

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
        <Overlay onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <Contents styles={styles}>
              <div>{children}</div>
            </Contents>
          </div>
        </Overlay>
      )}
    </>
  )
}

const Overlay = styled.div`
  ${flexCenter}
  position: fixed;
  inset: 0;
  overflow: hidden;
  background-color: ${black}80;
  z-index: 1000;
`

const defaultStyle = css`
  background-color: ${white}80;
  backdrop-filter: blur(30px) brightness(150%);
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
    padding: 40px 32px;
    border-radius: 24px;
    ${({ styles = defaultStyle }) => styles};
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
