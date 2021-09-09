import { VFC } from 'react'
import { backgroundImageSrc } from 'src/assets/images'
import { Image2, Image3 } from 'src/assets/svgs/lpImages'
import { Header } from 'src/components/Header'
import { Image } from 'src/elements/Image'
import {
  black,
  gradient,
  lightBlue,
  orange,
  pink,
  white,
} from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightLight,
  fontWeightMedium,
  fontWeightSemiBold,
} from 'src/styles/font'
import { ContentGuide } from 'src/styles/global-styles'
import { defaultShadow, flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'
import { HeroHeader } from './HeroHeader'

export const Top: VFC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroHeader />
        <ContentGuide>
          <Section>
            <Description>
              <h2>Verify the various ownerships</h2>
              <p>
                You can associate ownership of your Web 3.0 assets with your Web
                2.0 assets through various means, such as TXT records, Tags and
                Tweets.
              </p>
            </Description>
            <Icons>
              <PropertyIcon background={orange}>
                <h3>Domain</h3>
                <p>{'Use TXT records\nto claim'}</p>
              </PropertyIcon>
              <PropertyIcon background={pink}>
                <h3>Web</h3>
                <p>{'Use head tag\nto claim'}</p>
              </PropertyIcon>
              <PropertyIcon background={lightBlue}>
                <h3>Twitter</h3>
                <p>{'Use your tweet\nto claim'}</p>
              </PropertyIcon>
              <PropertyIcon background={gradient}>
                <h3>etc...</h3>
                <p>{'Use each method\nto claim'}</p>
              </PropertyIcon>
            </Icons>
          </Section>
          <Section>
            <ImageDiv>
              <Image2 />
            </ImageDiv>
            <Description>
              <h2>Real-time verification results</h2>
              <p>
                You can associate ownership of your Web 3.0 assets with your Web
                2.0 assets through various means, such as TXT records, Tags and
                Tweets.
              </p>
            </Description>
          </Section>
          <Section>
            <Description>
              <h2>Extremely scalable</h2>
              <p>
                You can associate ownership of your Web 3.0 assets with your Web
                2.0 assets through various means, such as TXT records, Tags and
                Tweets.
              </p>
            </Description>
            <Image3 />
          </Section>
        </ContentGuide>
        <Banner>
          <Image src={backgroundImageSrc} alt="" />
          <ContentGuide>
            <h2>Get in touch</h2>
            <p>
              If you have any questions or inquiries about Clame, please feel
              free to contact us using this contact form
            </p>
            <button>Contact form</button>
          </ContentGuide>
        </Banner>
      </main>
      <Footer>©︎2021 CLAME</Footer>
    </>
  )
}

const Footer = styled.footer`
  height: 48px;
  ${flexCenter};
  background: ${black};
  color: ${white};
  font-size: 16px;
  font-weight: ${fontWeightSemiBold};
`
const Banner = styled.div`
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
    font-size: 80px;
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
    width: 320px;
    height: 60px;
    border-radius: 32px;
    background: ${white};
    box-shadow: ${defaultShadow};
    text-align: center;
    font-size: 18px;
    font-weight: ${fontWeightSemiBold};
  }
`
const Description = styled.div`
  h2 {
    font-size: 64px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
    line-height: 1.4687;
  }
  p {
    margin-top: 28px;
    font-size: 18px;
    font-weight: ${fontWeightMedium};
    line-height: 1.5;
  }
`

const PropertyIcon = styled.div<{ background: string }>`
  width: 280px;
  height: 200px;
  border-radius: 56px;
  background: ${({ background }) => background};
  box-shadow: ${defaultShadow};
  color: ${white};
  ${flexCenter};
  flex-direction: column;
  h3 {
    font-size: 40px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
  }
  p {
    margin-top: 16px;
    font-size: 20px;
    font-weight: ${fontWeightLight};
    letter-spacing: -0.04em;
    line-height: 1.15;
    white-space: pre-wrap;
    text-align: center;
  }
`

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: -32px;
  margin-left: -28px;
  ${PropertyIcon} {
    margin-top: 32px;
    margin-left: 28px;
  }
`

const ImageDiv = styled.div`
  margin-left: 102px;
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 96px;
  ${Description} {
    max-width: 504px;
  }
`
