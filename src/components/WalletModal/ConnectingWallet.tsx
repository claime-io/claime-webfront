import React, { ReactNode, VFC } from 'react'
import { LoadingIcon, MetamaskIcon, WalletConnectIcon } from 'src/assets/svgs'
import { Heading, ModalBackIcon } from 'src/components/Modal/styles'
import {
  METAMASK_DESCRIPTION,
  WALLET_CONNECT_DESCRIPTION,
} from 'src/constants/misc'
import { WalletType } from 'src/hooks/useWallet'
import { darkpurple, errorColor, gray, purple, white } from 'src/styles/colors'
import { fontWeightMedium } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled, { css } from 'styled-components'

export const ConnectingWallet: VFC<{
  onBack: () => void
  errors: any
  type: WalletType
  closeModal: VoidFunction
  retry: (type: WalletType) => Promise<void>
}> = ({ onBack, errors, retry, type, closeModal }) => {
  return (
    <>
      <ModalBackIcon onClick={onBack} />
      <Layout>
        <Heading>Connect Wallet</Heading>
        {!errors ? (
          <LoadingDiv>
            <LoadingIcon />
            <Label>Initializing...</Label>
          </LoadingDiv>
        ) : (
          <ErrorDiv>
            <Label>Connection Error</Label>
            <RetryButton onClick={() => retry(type)}>Try Again</RetryButton>
          </ErrorDiv>
        )}
        <WalletDiv>
          <div>
            <Label>{type}</Label>
            <SmallLabel>{WALLET_SET[type].description}</SmallLabel>
          </div>
          {WALLET_SET[type].Icon}
        </WalletDiv>
      </Layout>
    </>
  )
}
const WALLET_SET: {
  [key in WalletType]: {
    description: string
    Icon: ReactNode
  }
} = {
  Metamask: {
    description: METAMASK_DESCRIPTION,
    Icon: <MetamaskIcon />,
  },
  WalletConnect: {
    description: WALLET_CONNECT_DESCRIPTION,
    Icon: <WalletConnectIcon />,
  },
}

const Layout = styled.div`
  > div {
    max-width: 262px;
    margin: 0 auto;
  }
  ${Heading} {
    margin-bottom: 24px;
  }
  @media ${breakpoint.s} {
    ${Heading} {
      padding: 16px 32px 0;
    }
  }
`

const Label = styled.span`
  line-height: 1.25;
`

const SmallLabel = styled.p`
  font-size: 10px;
  letter-spacing: 0.012em;
  margin-top: 5px;
`

const baseDivStyle = css`
  min-height: 64px;
  border-radius: 16px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > svg {
    height: 100%;
    width: 32px;
  }
  :not(:last-child) {
    margin-bottom: 18px;
  }
`

const WalletDiv = styled.div`
  ${baseDivStyle}
  color: ${white};
  background: ${purple};
  font-weight: ${fontWeightMedium};
  > div {
    margin-right: 8px;
  }
`

const LoadingDiv = styled.div`
  ${baseDivStyle}
  justify-content: start;
  color: ${darkpurple};
  background: ${white}0d;
  backdrop-filter: blur(30px) brightness(110%);
  > svg {
    margin-right: 8px;
  }
`

const ErrorDiv = styled.div`
  ${baseDivStyle}
  border: 1px solid ${errorColor};
  padding-right: 16px;
  ${Label} {
    color: ${errorColor};
    margin-right: 8px;
  }
`

const RetryButton = styled.button`
  width: 96px;
  height: 32px;
  border-radius: 16px;
  text-align: center;
  font-size: 12px;
  font-weight: ${fontWeightMedium};
  letter-spacing: 0.016em;
  background: ${gray};
  color: ${white};
  :hover {
    background: ${gray}7d;
  }
`
