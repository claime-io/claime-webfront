import { VFC } from 'react'
import { backgroundImageSrc } from 'src/assets/images'
import { Image } from 'src/elements/Image'
import { white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightSemiBold,
} from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { breakpoint, defaultShadow, flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'
import { useContactModal } from './ContactModal'

export const Banner: VFC = () => {
  const { open } = useContactModal()
  return (
    <BannerSection>
      <Image src={backgroundImageSrc} alt="" />
      <ContentGuide>
        <h2>Get in touch</h2>
        <p>
          If you have any questions or inquiries about Clame, please feel free
          to contact us using this contact form
        </p>
        <button onClick={open}>Contact form</button>
      </ContentGuide>
    </BannerSection>
  )
}

const BannerSection = styled.section`
  margin-top: 96px;
  position: relative;
  height: 600px;
  ${ContentGuide} {
    position: relative;
    ${flexCenter};
    flex-direction: column;
    height: 100%;
  }
  h2 {
    font-size: 40px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
  }
  p {
    margin-top: 28px;
    max-width: 600px;
    font-size: 18px;
    font-weight: ${fontWeightMedium};
    line-height: 1.5;
    text-align: center;
  }
  button {
    margin-top: 60px;
    width: 280px;
    max-width: 85%;
    height: 60px;
    border-radius: 32px;
    background: ${white};
    box-shadow: ${defaultShadow};
    text-align: center;
    font-size: 18px;
    font-weight: ${fontWeightSemiBold};
  }
  @media ${breakpoint.m} {
    h2 {
      font-size: 60px;
    }
  }
  @media ${breakpoint.l} {
    h2 {
      font-size: 80px;
    }
  }
`
