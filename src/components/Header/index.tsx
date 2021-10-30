import { VFC } from 'react'
import { Link } from 'src/elements/Link'
import { useWallet } from 'src/hooks/useWallet'
import { black, white } from 'src/styles/colors'
import { fontWeightLight } from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { breakpoint } from 'src/styles/mixins'
import { shortenAddress } from 'src/utils/address'
import { GITHUB_URL, TOP } from 'src/utils/routes'
import styled, { css } from 'styled-components'
import { ctaStyle } from '../Cta'
import { Logo } from '../Logo'
import { useWalletModal } from '../WalletModal'

export const Header: VFC = () => {
  const { account } = useWallet()
  const { open } = useWalletModal()
  return (
    <StyledHeader>
      <ContentGuide>
        <Link href={TOP}>
          <Logo />
        </Link>
        <Navigation>
          <Link href={GITHUB_URL}>GitHub</Link>
          <Button onClick={() => open({})} connected={!!account}>
            {account ? shortenAddress(account) : 'Connect Wallet'}
          </Button>
        </Navigation>
      </ContentGuide>
    </StyledHeader>
  )
}

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
      ${Link},${Button} {
        display: none;
      }
    }
  }
  @media ${breakpoint.m} {
    padding-top: 40px;
    ${ContentGuide} {
      ${Navigation} {
        ${Link},${Button} {
          display: unset;
        }
      }
    }
  }
`
