import { VFC } from 'react'
import { CircleStroke } from 'src/assets/svgs'
import { useLoadingModal } from 'src/hooks/useModal'
import { white } from 'src/styles/colors'
import { absoluteFill } from 'src/styles/mixins'
import styled, { css, keyframes } from 'styled-components'

export const CirclesLoading = styled(({ className }) => (
  <Circles className={className}>
    <Circle strokeWidth={12} size={122} />
    <Circle strokeWidth={6} size={176} />
    <Circle strokeWidth={2} size={190} opacity={0.5} />
    <Circle strokeWidth={4} size={202} />
    <Circle strokeWidth={3} size={222} />
    <Circle strokeWidth={1} size={240} opacity={0.5} />
  </Circles>
))``

export const useCirclesLoadingModal = () =>
  useLoadingModal(CirclesLoading, {
    styles: {
      overlayGradientStyles: css`
        opacity: 0.25;
      `,
    },
  })

const keyframes1 = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 100;
  }
  100%{
    opacity: 0;
  }
`
const animation1 = css`
  :nth-child(1) {
    animation: ${keyframes1} 1.5s ease-in-out infinite;
  }
`
const keyframes2 = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 100;
  }
  100%{
    opacity: 0;
  }
`
const animation2 = css`
  :nth-child(2) {
    animation: ${keyframes2} 4.5s ease-in-out infinite;
  }
`
const keyframes3 = keyframes`
  0% {
    stroke-dasharray: 90px;
    transform: rotate(0deg);
  }
  100% {
    stroke-dasharray: 90px;
    transform: rotate(360deg)
  }
`
const animation3 = css`
  :nth-child(3) {
    /* stroke-dasharray: 120; */
    animation: ${keyframes3} 1.5s ease-in-out infinite;
  }
`
const keyframes4 = keyframes`
  0% {
    stroke-dasharray: 320px;
    transform: rotate(0deg);
  }
  100% {
    stroke-dasharray: 320px;
    transform: rotate(360deg)
  }
`
const animation4 = css`
  :nth-child(4) {
    stroke-dasharray: 120px;
    animation: ${keyframes4} 4.5s ease-in-out infinite;
  }
`
const keyframes5 = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 100;
  }
  100%{
    opacity: 0;
  }
`
const animation5 = css`
  :nth-child(5) {
    stroke-dasharray: 0;
    animation: ${keyframes5} 1.5s ease-in-out infinite;
  }
`
const keyframes6 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
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
    border-top: transparent;
    fill: transparent;
    ${animation1};
    ${animation2};
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
