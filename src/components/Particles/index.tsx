import merge from 'merge-deep'
import { VFC } from 'react'
import { discordIconSrc } from 'src/assets/images'
import styled, { css } from 'styled-components'
import { tsParticles } from 'tsparticles'
import { presets } from './presets'

const PARTICLE_TYPES = ['discord'] as const

type ParticleType = typeof PARTICLE_TYPES[number]
const particleId = (type: ParticleType) => `tsparticles-${type}`

const discordOptions: typeof presets = {
  particles: {
    shape: {
      image: {
        src: discordIconSrc,
        width: 121,
        height: 92,
      },
      type: 'image',
    },
    size: {
      value: 20,
    },
  },
}

export const initializeDiscordParticles = () =>
  tsParticles.loadFromArray(
    particleId('discord'),
    [merge(presets, discordOptions) as any],
    1,
  )

export const Particles: VFC<{ type: ParticleType }> = ({ type }) => {
  return <ParticlesDiv id={particleId(type)} />
}

export const FullScreenContainer = styled.div<{ scale?: number }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s transform ease-out;
  ${({ scale = 1 }) => css`
    transform: scale(${scale});
  `}
`

const ParticlesDiv = styled.div`
  width: 100%;
  height: 100%;
`
