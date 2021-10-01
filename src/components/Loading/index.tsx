import { VFC } from 'react'
import { CircleStroke } from 'src/assets/svgs'
import { white } from 'src/styles/colors'
import { absoluteFill } from 'src/styles/mixins'
import styled, { css, keyframes } from 'styled-components'

export const CiclesLoading = styled(({ className }) => (
  <Circles className={className}>
    <Circle strokeWidth={12} size={122} />
    <Circle strokeWidth={6} size={176} />
    <Circle strokeWidth={2} size={190} opacity={0.5} />
    <Circle strokeWidth={4} size={202} />
    <Circle strokeWidth={3} size={222} />
    <Circle strokeWidth={1} size={240} opacity={0.5} />
  </Circles>
))``

const keyframes3 = keyframes`
  0%,100% {
    stroke-dashoffset: 600px;
  }
  50% {
    stroke-dashoffset: 0px;
  }
`
const animation3 = css`
  :nth-child(3) {
    stroke-dasharray: 20px 40px 120px 50px;
    animation: ${keyframes3} 3s ease-in-out infinite;
  }
`
const keyframes4 = keyframes`
  0%,100% {
    stroke-dasharray: 120px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 140px;
    stroke-dashoffset: 200px;
  }
`
const animation4 = css`
  :nth-child(4) {
    stroke-dasharray: 120px;
    animation: ${keyframes4} 2.5s ease-in-out infinite;
  }
`
const keyframes5 = keyframes`
  0%,100% {
    stroke-dashoffset: 400px;
  }
  50% {
    stroke-dashoffset: 200px;
  }
`
const animation5 = css`
  :nth-child(5) {
    stroke-dasharray: 20px 40px;
    animation: ${keyframes5} 2s ease-in-out infinite;
  }
`
const keyframes6 = keyframes`
  0%,100% {
    stroke-dashoffset: 600px;
  }
  50% {
    stroke-dashoffset: 0px;
  }
`
const animation6 = css`
  :nth-child(6) {
    stroke-dasharray: 200px 400px;
    animation: ${keyframes6} 3s ease-in-out infinite;
  }
`

const Circles = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  svg {
    ${absoluteFill};
    stroke: ${white};
    fill: transparent;
    ${animation3};
    ${animation4};
    ${animation5};
    ${animation6};
  }
`
const Circle: VFC<{ strokeWidth: number; size: number; opacity?: number }> = ({
  strokeWidth,
  size,
  opacity,
}) => (
  <CircleStroke
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    opacity={opacity}
  />
)
