import React, { useState, VFC } from 'react'
import {
  CheckIcon,
  ColorfulCircleIcon,
  CopyIcon,
  ExternalLinkIcon,
} from 'src/assets/svgs'
import { Heading, SubHeading } from 'src/components/Modal/styles'
import { getExplorer } from 'src/constants/chains'
import { Link } from 'src/elements/Link'
import { useWallet } from 'src/hooks/useWallet'
import { white } from 'src/styles/colors'
import { fontWeightMedium } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import { shortenAddress } from 'src/utils/address'
import styled from 'styled-components'
import { CtaButton } from '../Button'

export const AddressInfo: VFC<{
  address: string
  closeModal: VoidFunction
}> = ({ address, closeModal }) => {
  const [isCopied, setIsCopied] = useState(false)
  const onClickCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(address)
    setTimeout(() => setIsCopied(false), 500)
  }
  const { activeWalletType, chainId, disconnect } = useWallet()
  const explorer = chainId && getExplorer(chainId)

  return (
    <Layout>
      <Heading>Your Account</Heading>
      <SubHeading>{`Connected with ${activeWalletType}`}</SubHeading>
      <AddressLabelDiv>
        <ColorfulCircleIcon />
        <span>{shortenAddress(address)}</span>
      </AddressLabelDiv>
      <ActionAreaDiv>
        <div onClick={onClickCopy}>
          {isCopied ? <CheckIcon /> : <CopyIcon />}
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </div>
        {explorer ? (
          <Link href={explorer.address(address)}>
            <ExternalLinkIcon />
            <span>Explorer</span>
          </Link>
        ) : (
          <p>Explorer Not Found.</p>
        )}
      </ActionAreaDiv>
      <ButtonAreaDiv>
        {activeWalletType == 'WalletConnect' && (
          <CtaButton onClick={disconnect}>Disconnect</CtaButton>
        )}
        <CtaButton onClick={closeModal}>OK</CtaButton>
      </ButtonAreaDiv>
    </Layout>
  )
}

const ButtonAreaDiv = styled.div`
  ${flexCenter};
  > button:nth-child(2n) {
    margin-left: 12px;
  }
`

const ActionAreaDiv = styled.div`
  ${flexCenter};
  > div,
  a {
    display: flex;
    align-items: center;
  }
  > div {
    cursor: pointer;
    margin-right: 16px;
    min-width: 88px;
  }
  span {
    margin-left: 8px;
    font-size: 14px;
  }
`

const AddressLabelDiv = styled.div`
  ${flexCenter};
  font-size: 20px;
  font-weight: ${fontWeightMedium};
  line-height: calc(20 / 25);
  > span {
    margin-left: 12px;
  }
`

const Layout = styled.div`
  color: ${white};
  ${Heading} {
    margin-bottom: 24px;
  }
  ${SubHeading} {
    opacity: 0.5;
    margin-bottom: 16px;
  }
  ${AddressLabelDiv} {
    margin-bottom: 12px;
  }
  ${ActionAreaDiv} {
    margin-bottom: 16px;
  }
  ${ButtonAreaDiv} {
    margin-top: 32px;
  }
`
