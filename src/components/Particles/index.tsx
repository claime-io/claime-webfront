import merge from 'merge-deep'
import { useEffect } from 'react'
import { discordIconSrc } from 'src/assets/images'
import styled from 'styled-components'
import { tsParticles } from 'tsparticles'
import { presets } from './presets'

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
    move: {},
  },
}

const initializeDiscord = () =>
  tsParticles.loadFromArray(
    'tsparticles',
    [merge(presets, discordOptions) as any],
    1,
  )

const particles = tsParticles.domItem(0)

export const DiscordParticles = () => {
  useEffect(() => {
    initializeDiscord().then(() => {
      particles?.play()
      console.log(particles?.sourceOptions)
    })
  }, [])
  return <Particles id="tsparticles" />
}

export const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Particles = styled.div`
  width: 100%;
  height: 100%;
`
