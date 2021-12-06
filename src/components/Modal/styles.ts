import { BackIcon } from 'src/assets/svgs'
import { Link } from 'src/elements/Link'
import { fontWeightBold, fontWeightLight } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'

export const Heading = styled.h2`
  font-size: 28px;
  font-weight: ${fontWeightBold};
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  @media ${breakpoint.m} {
    font-size: 48px;
  }
`

export const SubHeading = styled.h3`
  font-size: 16px;
  font-weight: ${fontWeightLight};
  text-align: center;
  line-height: 1.4;
`

export const Description = styled.p`
  text-align: center;
  line-height: 1.5;
`

export const ModalBackIcon = styled(BackIcon)`
  position: absolute;
  top: 24px;
  left: 24px;
  cursor: pointer;
`

export const InlineLink = styled(Link)`
  text-decoration: underline;
`
