import { VFC } from 'react'
import { backgroundImageSrc } from 'src/assets/images'
import { ClaimeLogoLarge } from 'src/assets/svgs/lpImages'
import { Image } from 'src/elements/Image'
import { white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightSemiBold,
} from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { defaultShadow } from 'src/styles/mixins'
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
        <button>Supporting development</button>
      </DescriptionDiv>
      <ClaimeLogoLarge />
    </ContentGuide>
  </HeroHeaderDiv>
)

const HeroHeaderDiv = styled.div`
  position: relative;
  width: 100%;
  height: 736px;
  ${ContentGuide} {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`
const DescriptionDiv = styled.div`
  max-width: 708px;
  h1 {
    font-size: 104px;
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
  button {
    margin-top: 48px;
    width: 238px;
    height: 46px;
    border-radius: 8px;
    background: ${white};
    box-shadow: ${defaultShadow};
    text-align: center;
    font-size: 16px;
    font-weight: ${fontWeightSemiBold};
  }
`
