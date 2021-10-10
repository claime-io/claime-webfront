import React, { VFC } from 'react'
import { WalletType } from 'src/hooks/useWallet'
import { black, white } from 'src/styles/colors'
import { fontWeightBold } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
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
  font-weight: ${fontWeightBold};
  line-height: 1.4;
  white-space: nowrap;
`

const WalletOptionButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 16px 32px;
  border-radius: 16px;
  background-color: ${white};
  color: ${black};
  box-shadow: 0 3px 2px ${black}29;
  > svg {
    display: inline-block;
    height: 2em;
    width: 2em;
    margin-right: 16px;
  }
  :hover,
  :focus {
    background-color: ${white}bf;
  }
  @media ${breakpoint.m} {
    flex-direction: column;
    max-width: 188px;
    padding: 32px;
    > svg {
      height: 56px;
      width: auto;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`
