import { VFC } from 'react'
import { Image2, Image3 } from 'src/assets/svgs/lpImages'
import { gradient, lightBlue, orange, pink, white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightLight,
  fontWeightMedium,
} from 'src/styles/font'
import { breakpoint, defaultShadow, flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

export const FirstSection: VFC = () => (
  <Section>
    <Description>
      <h2>Verify the various ownerships</h2>
      <p>
        You can associate ownership of your Web 3.0 assets with your Web 2.0
        assets through various means, such as TXT records, Tags and Tweets.
      </p>
    </Description>
    <Icons>
      <div>
        <PropertyIcon background={orange}>
          <h3>Domain</h3>
          <p>{'Use TXT records\nto claim'}</p>
        </PropertyIcon>
        <PropertyIcon background={pink}>
          <h3>Web</h3>
          <p>{'Use head tag\nto claim'}</p>
        </PropertyIcon>
      </div>
      <div>
        <PropertyIcon background={lightBlue}>
          <h3>Twitter</h3>
          <p>{'Use your tweet\nto claim'}</p>
        </PropertyIcon>
        <PropertyIcon background={gradient}>
          <h3>etc...</h3>
          <p>{'Use each method\nto claim'}</p>
        </PropertyIcon>
      </div>
    </Icons>
  </Section>
)

export const SecondSection: VFC = () => (
  <Section>
    <Description>
      <h2>Real-time verification results</h2>
      <p>
        You can associate ownership of your Web 3.0 assets with your Web 2.0
        assets through various means, such as TXT records, Tags and Tweets.
      </p>
    </Description>
    <ImageDiv>
      <Image2 />
    </ImageDiv>
  </Section>
)

export const ThirdSection: VFC = () => (
  <Section>
    <Description>
      <h2>Extremely scalable</h2>
      <p>
        You can associate ownership of your Web 3.0 assets with your Web 2.0
        assets through various means, such as TXT records, Tags and Tweets.
      </p>
    </Description>
    <Image3 />
  </Section>
)

const Description = styled.div`
  h2 {
    font-size: 32px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
    line-height: 1.2;
  }
  p {
    margin-top: 28px;
    font-size: 18px;
    font-weight: ${fontWeightMedium};
    line-height: 1.5;
  }
  @media ${breakpoint.m} {
    h2 {
      font-size: 48px;
    }
  }
  @media ${breakpoint.l} {
    h2 {
      font-size: 64px;
      line-height: 1.4687;
    }
    p {
      margin-top: 28px;
    }
  }
`

const PropertyIcon = styled.div<{ background: string }>`
  min-width: 120px;
  min-height: 100px;
  border-radius: 28px;
  background: ${({ background }) => background};
  box-shadow: ${defaultShadow};
  color: ${white};
  ${flexCenter};
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
  }
  p {
    display: none;
    font-size: 20px;
    margin-top: 16px;
    font-weight: ${fontWeightLight};
    letter-spacing: -0.04em;
    line-height: 1.15;
    white-space: pre-wrap;
    text-align: center;
  }
  @media ${breakpoint.m} {
    width: 240px;
    height: 160px;
    border-radius: 32px;
    h3 {
      font-size: 40px;
    }
    p {
      display: block;
    }
  }
  @media ${breakpoint.l} {
    width: 280px;
    height: 200px;
    border-radius: 56px;
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
  width: 80%;
  @media ${breakpoint.l} {
    margin-left: 102px;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 32px;

  ${Description} {
    text-align: center;
    width: 80%;
  }
  svg {
    width: 100%;
    height: auto;
  }
  > * {
    margin-top: 48px;
  }
  @media ${breakpoint.m} {
    margin-top: 64px;
  }
  @media ${breakpoint.l} {
    flex-direction: row;
    margin-top: 96px;
    ${Description} {
      text-align: left;
      max-width: 504px;
    }
    :nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
`
