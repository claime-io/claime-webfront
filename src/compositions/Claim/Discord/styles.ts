import { CtaButton } from 'src/components/Button'
import { discord, white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightRegular,
  fontWeightSemiBold,
} from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'

export const DiscordCta = styled(CtaButton)`
  position: relative;
  height: 40px;
  width: 240px;
  border-radius: 24px;
  background: ${white};
  border: 1px solid ${discord};
  color: ${discord};
  font-size: 18px;
  font-weight: ${fontWeightBold};
  :enabled:hover,
  :enabled:focus {
    background: ${discord};
    border: 1px solid ${white};
    color: ${white};
  }
  @media ${breakpoint.m} {
    height: 64px;
    border-radius: 32px;
    font-size: 24px;
  }
`
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  > button {
    margin: 20px;
  }
  @media ${breakpoint.m} {
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: ${fontWeightSemiBold};
  letter-spacing: -0.04em;

  @media ${breakpoint.m} {
    font-size: 64px;
    font-weight: ${fontWeightBold};
  }
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: ${fontWeightRegular};
  max-width: 640px;
  white-space: pre-wrap;
  line-height: 1.4;
`

export const InformationDiv = styled.div`
  width: 80%;

  > div {
    margin-top: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    p {
      font-size: 18px;
      font-weight: ${fontWeightMedium};
    }
  }
  @media ${breakpoint.m} {
    > div {
      flex-direction: row;
      p {
        font-size: 24px;
      }
    }
  }
`
