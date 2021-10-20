import { black, white } from 'src/styles/colors'
import { fontWeightMedium } from 'src/styles/font'
import { defaultShadow } from 'src/styles/mixins'
import styled, { css } from 'styled-components'

export const CtaButton = styled.button`
  display: block;
  width: 100%;
  min-height: 32px;
  padding: 0 24px;
  border-radius: 16px;

  background: ${white};
  box-shadow: ${defaultShadow};
  color: ${black};

  font-size: 12px;
  letter-spacing: 0.016em;
  font-weight: ${fontWeightMedium};
  text-align: center;
  white-space: nowrap;
  :enabled:hover,
  :enabled:focus {
    background: ${black};
    color: ${white};
  }
`

export const ctaStyle = css`
  padding: 16px 24px;
  border-radius: 20px;
  box-shadow: 0px 3px 6px #00000020;
  font-size: 16px;
  font-weight: ${fontWeightMedium};
`
