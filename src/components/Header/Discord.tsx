import { VFC } from 'react'
import { Link } from 'src/elements/Link'
import { fontWeightMedium } from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { breakpoint } from 'src/styles/mixins'
import { GITHUB_URL } from 'src/utils/routes'
import styled from 'styled-components'
import { Logo } from '../Logo'

export const Header: VFC = () => (
  <>
    <StyledHeader>
      <ContentGuide>
        <Logo />
        <Navigation>
          <Link href={GITHUB_URL}>GitHub</Link>
        </Navigation>
      </ContentGuide>
    </StyledHeader>
  </>
)

const HEADER_HEIGHT = '64px'
const HEADER_HEIGHT_LARGE = '80px'
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  background-color: #ffffff80;
  backdrop-filter: blur(50px) brightness(1.5);
  box-shadow: 0 3px 2px #00000029;
  z-index: 1;

  ${ContentGuide} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  @media ${breakpoint.m} {
    height: ${HEADER_HEIGHT_LARGE};
  }
`

const Navigation = styled.nav`
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  letter-spacing: -0.04em;
`

export const HeaderSpacer = styled.div`
  padding-top: ${HEADER_HEIGHT};
  @media ${breakpoint.m} {
    padding-top: ${HEADER_HEIGHT_LARGE};
  }
`
