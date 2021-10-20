import { black, white } from 'src/styles/colors'
import { fontWeightLight, fontWeightSemiBold } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  padding: 24px 0;
  ${flexCenter};
  font-size: 16px;
  font-weight: ${fontWeightLight};
`

export const DIscordFooter = styled.footer`
  position: relative;
  height: 48px;
  padding: 24px 0;
  ${flexCenter};
  background: ${black};
  color: ${white};
  font-size: 16px;
  font-weight: ${fontWeightSemiBold};
`
