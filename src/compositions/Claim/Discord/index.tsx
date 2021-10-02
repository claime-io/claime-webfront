import { useEffect, useState } from 'react'
import { DiscordLogo } from 'src/assets/svgs'
import { CiclesLoading } from 'src/components/Loading'
import {
  FullScreenContainer,
  initializeDiscordParticles,
  Particles,
} from 'src/components/Particles'
import { useWalletModal } from 'src/components/WalletModal'
import { discord, white } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import styled, { css } from 'styled-components'
import { Container } from 'tsparticles'

type Status =
  | 'connecting'
  | 'confirmation'
  | 'verifying'
  | 'failed'
  | 'succeeded'

export const Discord = () => {
  const { open } = useWalletModal()
  const [particles, setParticles] = useState<Container>()
  const [status, setStatus] = useState<Status>('connecting')
  const [bgScale, setBgScale] = useState(0)
  useEffect(() => {
    open(
      {
        theme: 'discord',
        onClose: () => setStatus('confirmation'),
      },
      { styles: discordModalStyle, inescapable: true },
    )
    initializeDiscordParticles().then((particles) => setParticles(particles))
  }, [])
  useEffect(() => {
    if (!particles) return
    if (status === 'connecting') {
      setBgScale(0)
    }
    if (status === 'confirmation') {
      setBgScale(0)
    }
    if (status === 'verifying') {
      particles.options.particles.move.direction = 'none'
      particles.options.particles.move.speed = 0.1
      particles.refresh()
      setBgScale(1)
    }
    if (status === 'succeeded') {
      particles.options.particles.move.direction = 'top'
      particles.options.particles.move.speed = 24
      particles.options.particles.collisions.mode = 'bounce'
      particles.options.particles.size.value = 120
      particles.options.particles.size.random.enable
      particles.options.particles.number.density.value_area = 100000
      particles.refresh()
    }
    if (status === 'failed') {
      particles.options.particles.move.direction = 'bottom'
      particles.options.particles.move.speed = 6
      particles.refresh()
    }
  }, [status])
  return (
    <>
      <Main>
        <FullScreenContainer scale={bgScale}>
          <Particles type="discord" />
        </FullScreenContainer>
        <Content>
          {status === 'connecting' && (
            <button onClick={() => setStatus('confirmation')}>
              <DiscordLogo />
            </button>
          )}
          {status === 'confirmation' && (
            <button onClick={() => setStatus('verifying')}>
              <DiscordLogo />
              <p>Your Discord ID: XXXXX</p>
              <p>Your EOA: 0x0000000</p>
              <div>
                <p>
                  You can store the binding of your discord ID and EOA to Claime
                  Smart Contract so that you will be verify automatically when
                  you need to verify your NFT ownership.
                </p>
              </div>
              <p>
                Or you can verify with only your signature as one time
                verification
              </p>
              <button>Store</button>
              <button>Sign only</button>
            </button>
          )}
          {status === 'verifying' && (
            <>
              <button onClick={() => setStatus('succeeded')}>
                <h2>Verifying now...</h2>
              </button>
              <p>It may take a few minutes to verify.</p>
              <CiclesLoading />
            </>
          )}
          {status === 'succeeded' && (
            <button onClick={() => setStatus('failed')}>
              <h2>Verification success!</h2>
            </button>
          )}
          {status === 'failed' && (
            <>
              <button onClick={() => setStatus('connecting')}>
                <h2>Verification failed.</h2>
              </button>
              <p>
                Your verification has failed. Do you want to verify again with
                another wallet?
              </p>
            </>
          )}
        </Content>
      </Main>
    </>
  )
}

const discordModalStyle = css`
  background: ${discord};
  color: ${white};
`

const Content = styled.div`
  position: relative;
  ${flexCenter};
  flex-direction: column;
  color: ${white};
  text-align: center;
  h2 {
    font-size: 64px;
    font-weight: ${fontWeightBold};
    letter-spacing: -0.04em;
    margin-bottom: 64px;
  }
  p {
    font-size: 18px;
    font-weight: ${fontWeightRegular};
  }
  ${CiclesLoading} {
    margin-top: 64px;
  }
`

const Main = styled.main`
  position: relative;
  background: ${discord};
  ${flexCenter};
`
