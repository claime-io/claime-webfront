import { VFC } from 'react'
import { backgroundImageSrc } from 'src/assets/images'
import { ClaimeLogoLarge } from 'src/assets/svgs/lpImages'
import { Image } from 'src/elements/Image'
import { Link } from 'src/elements/Link'
import { white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightSemiBold,
} from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { breakpoint, defaultShadow } from 'src/styles/mixins'
import { SUPPORT_URL } from 'src/utils/routes'
import styled from 'styled-components'

export const HeroHeader: VFC = () => (
  <HeroHeaderDiv>
    <Image src={backgroundImageSrc} alt="" />
    <ContentGuide>
      <DescriptionDiv>
        <h1>{'Make\nyour ownership verifiable'}</h1>
        <p>
          An open source product that ties blockchain wallet ownership to Web
          2.0, such as websites and social accounts.
        </p>
        <StyledLink href={SUPPORT_URL}>Support development</StyledLink>
      </DescriptionDiv>
      <ClaimeLogoLarge />
    </ContentGuide>
  </HeroHeaderDiv>
)

const HeroHeaderDiv = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  ${ContentGuide} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  svg {
    display: none;
  }
  @media ${breakpoint.l} {
    height: 736px;
    svg {
      display: unset;
    }
    ${ContentGuide} {
      justify-content: space-between;
    }
  }
`
const StyledLink = styled(Link)`
  display: block;
  width: 238px;
  padding: 15px;
  border-radius: 8px;
  background: ${white};
  box-shadow: ${defaultShadow};
  text-align: center;
  font-size: 16px;
  font-weight: ${fontWeightSemiBold};
`
const DescriptionDiv = styled.div`
  max-width: 708px;
  h1 {
    font-size: 48px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
    line-height: 1.0769;
    white-space: pre-wrap;
  }
  p {
    width: 85%;
    margin-top: 48px;
    font-size: 18px;
    font-weight: ${fontWeightMedium};
  }
  ${StyledLink} {
    margin-top: 48px;
  }
  @media ${breakpoint.m} {
    h1 {
      font-size: 72px;
      white-space: pre-wrap;
    }
  }
  @media ${breakpoint.l} {
    h1 {
      font-size: 104px;
    }
  }
`
