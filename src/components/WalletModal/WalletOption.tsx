import React, { VFC } from 'react'
import { WalletType } from 'src/hooks/useWallet'
import { white } from 'src/styles/colors'
import { fontWeightRegular } from 'src/styles/font'
import { absoluteFill, breakpoint, flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

type Props = {
  type: WalletType
  label?: string
  Icon: SvgrComponent
  notInstalled?: boolean
  hasEnabled?: boolean
  onAlreadyEnabled?: () => void
  onNotInstalled?: () => void
  onClick: () => Promise<void>
}

export const WalletOption: VFC<Props> = ({
  type,
  label,
  Icon,
  notInstalled,
  hasEnabled,
  onAlreadyEnabled,
  onNotInstalled,
  onClick,
}) => (
  <WalletOptionButton
    onClick={
      notInstalled && onNotInstalled
        ? onNotInstalled
        : hasEnabled && onAlreadyEnabled
        ? onAlreadyEnabled
        : onClick
    }
  >
    <Icon />
    <WalletLabel>{label || type}</WalletLabel>
  </WalletOptionButton>
)

const WalletLabel = styled.span`
  font-size: 20px;
  font-weight: ${fontWeightRegular};
  white-space: nowrap;
`

const WalletOptionButton = styled.button`
  position: relative;
  ${flexCenter};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: ${white};
  > svg {
    display: inline-block;
    height: 2em;
    width: 2em;
    margin-right: 16px;
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
  @media ${breakpoint.m} {
    flex-direction: column;
    > svg {
      height: 56px;
      width: auto;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`
