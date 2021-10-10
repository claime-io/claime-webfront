import { BackIcon } from 'src/assets/svgs'
import { fontWeightBold, fontWeightMedium } from 'src/styles/font'
import styled from 'styled-components'

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: ${fontWeightBold};
  line-height: 1.25;
  text-align: center;
`

export const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: ${fontWeightMedium};
  text-align: center;
  letter-spacing: -0.04em;
  line-height: 1.35;
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
