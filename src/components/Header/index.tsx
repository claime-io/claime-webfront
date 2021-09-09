import { VFC } from 'react'
import { Link } from 'src/elements/Link'
import { fontWeightMedium } from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { GITHUB_URL } from 'src/utils/routes'
import styled from 'styled-components'
import { Logo } from '../Logo'

export const Header: VFC = () => (
  <StyledHeader>
    <ContentGuide>
      <Logo />
      <Navigation>
        <Link href={GITHUB_URL}>GitHub</Link>
      </Navigation>
    </ContentGuide>
  </StyledHeader>
)

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #ffffff80;
  backdrop-filter: blur(50px) brightness(1.5);
  box-shadow: 0 3px 2px #00000029;

  ${ContentGuide} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

const Navigation = styled.nav`
  font-size: 16px;
  font-weight: ${fontWeightMedium};
`
