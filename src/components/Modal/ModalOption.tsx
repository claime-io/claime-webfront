import React, { VFC } from 'react'
import { white } from 'src/styles/colors'
import { fontWeightRegular } from 'src/styles/font'
import { absoluteFill, flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

type Props = {
  label: string
  Icon: SvgrComponent
  onClick: VoidFunction
}

export const ModalOption: VFC<Props> = ({ label, Icon, onClick }) => (
  <ModalOptionButton onClick={onClick}>
    <Icon />
    <ModalLabel>{label}</ModalLabel>
  </ModalOptionButton>
)

const ModalLabel = styled.span`
  font-size: 20px;
  font-weight: ${fontWeightRegular};
  white-space: nowrap;
`

const ModalOptionButton = styled.button`
  position: relative;
  ${flexCenter};
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: ${white};
  > svg {
    display: inline-block;
    height: 56px;
    width: auto;
    margin-bottom: 16px;
  }

  ::before {
    content: '';
    ${absoluteFill};
    transition: all 0.25s ease-in-out;
    border-radius: 50%;
    border: 1px solid ${white}00;
  }
  :hover,
  :focus {
    ::before {
      background-color: ${white}26;
      backdrop-filter: blur(30px) brightness(1.15);
      border: 1px solid ${white};
    }
  }
  > * {
    position: relative;
  }
`
