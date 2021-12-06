import { VFC } from 'react'
import { backgroundImageSrc } from 'src/assets/images'
import { Image } from 'src/elements/Image'
import { white } from 'src/styles/colors'
import { absoluteFill } from 'src/styles/mixins'
import styled from 'styled-components'

export const Background: VFC = () => (
  <BackgroundDiv>
    <Image src={backgroundImageSrc} alt="" />
    <BackgroundFilter />
  </BackgroundDiv>
)

const BackgroundDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const BackgroundFilter = styled.div`
  ${absoluteFill};
  background-color: ${white}80;
  backdrop-filter: blur(50px) brightness(1.5);
`
