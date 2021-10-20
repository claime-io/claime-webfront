import { VFC } from 'react'
import { Link } from 'src/elements/Link'
import { fontWeightLight } from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { GITHUB_URL } from 'src/utils/routes'
import styled from 'styled-components'
import { ctaStyle } from '../Button'
import { Logo } from '../Logo'

export const Header: VFC = () => (
  <StyledHeader>
    <ContentGuide>
      <Logo />
      <Navigation>
        <Link href={GITHUB_URL}>GitHub</Link>
        <Button>Connect Wallet</Button>
      </Navigation>
    </ContentGuide>
  </StyledHeader>
)

const Button = styled.button`
  ${ctaStyle};
`

const StyledHeader = styled.header`
  padding-top: 40px;
  position: relative;
  ${ContentGuide} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
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
