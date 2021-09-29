import { VFC } from 'react'
import { ClaimeLogo, ClaimeLogoText } from 'src/assets/svgs'
import styled from 'styled-components'

export const Logo: VFC = () => (
  <LogoDiv>
    <ClaimeLogo />
    <ClaimeLogoText />
  </LogoDiv>
)

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  > svg {
    :not(:first-child) {
      margin-left: 12px;
    }
  }
`
