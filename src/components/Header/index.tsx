import router from 'next/router'
import { VFC } from 'react'
import { ReloadIcon } from 'src/assets/svgs'
import { networkLabelShort } from 'src/constants/chains'
import { getContractAddress } from 'src/constants/contractAddresses'
import { Link } from 'src/elements/Link'
import { useWallet } from 'src/hooks/useWallet'
import { black, errorColor, white } from 'src/styles/colors'
import { fontWeightLight } from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import { shortenAddress } from 'src/utils/address'
import { DISCLAIMER_URL, eoaSummary, GITHUB_URL, TOP } from 'src/utils/routes'
import styled, { css } from 'styled-components'
import { ctaStyle } from '../Cta'
import { Logo } from '../Logo'
import { useNetworkModal } from '../NetworkModal'
import { useWalletModal } from '../WalletModal'

export const Header: VFC = () => {
  const { account, chainId } = useWallet()
  const { open: openWalletModal } = useWalletModal()
  const { open: openNetworkModal } = useNetworkModal()
  return (
    <StyledHeader>
      <ContentGuide>
        <Link href={TOP}>
          <Logo />
        </Link>
        <Navigation>
          <Link href={GITHUB_URL}>GitHub</Link>
          <Link href={DISCLAIMER_URL}>Disclaimer</Link>
          {chainId &&
            (getContractAddress(chainId) ? (
              <NetworkButton onClick={() => openNetworkModal()}>
                <ReloadIcon />
                {networkLabelShort(chainId)}
              </NetworkButton>
            ) : (
              <NetworkButton onClick={() => openNetworkModal()} isWrong>
                <ReloadIcon /> Wrong Network
              </NetworkButton>
            ))}
          {account ? (
            <Button onClick={() => router.push(eoaSummary(account))} connected>
              {shortenAddress(account)}
            </Button>
          ) : (
            <Button onClick={() => openWalletModal()} connected={false}>
              Connect Wallet
            </Button>
          )}
        </Navigation>
      </ContentGuide>
    </StyledHeader>
  )
}

const NetworkButton = styled.button<{ isWrong?: boolean }>`
  ${ctaStyle};
  ${flexCenter};
  svg {
    width: 1.1em;
    height: 1.1em;
    margin-right: 8px;
  }
  width: fit-content;
  ${({ isWrong }) =>
    isWrong &&
    css`
      background-color: ${errorColor};
      color: ${white};
    `}
`

const Button = styled.button<{ connected: boolean }>`
  ${ctaStyle};
  ${({ connected }) =>
    connected &&
    css`
      background-color: ${black};
      color: ${white};
    `}
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: ${fontWeightLight};
  letter-spacing: -0.04em;
  > * {
    margin-left: 32px;
  }
`

const StyledHeader = styled.header`
  padding-top: 20px;
  position: relative;
  z-index: 1;
  ${ContentGuide} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    > ${Link} {
      max-width: 50%;
    }
    ${Navigation} {
      display: none;
    }
  }
  @media ${breakpoint.m} {
    padding-top: 40px;
    ${ContentGuide} {
      ${Navigation} {
        display: flex;
      }
    }
  }
`
