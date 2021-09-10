import React, { ReactNode, VFC } from 'react'
import { black, white } from 'src/styles/colors'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

export type ModalProps = {
  isOpen: boolean
  closeModal?: () => void
}

export const Modal: VFC<ModalProps & { children: ReactNode }> = ({
  isOpen,
  closeModal,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <Overlay onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <Contents>
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

const Contents = styled.div`
  max-width: 640px;
  max-height: 85vh;
  width: 85vw;
  padding-right: 24px;
  padding-left: 24px;
  position: relative;
  > div {
    width: fit-content;
    margin: 0 auto;
    padding: 40px 53px 48px 53px;
    border-radius: 32px;
    background-color: ${white}80;
    backdrop-filter: blur(30px) brightness(150%);
  }

  @media ${breakpoint.m} {
    width: 80vw;
  }
  @media ${breakpoint.l} {
    width: 100%;
  }
`
