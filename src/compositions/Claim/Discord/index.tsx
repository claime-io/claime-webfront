import { useEffect, useState } from 'react'
import { DiscordLogo } from 'src/assets/svgs'
import { CiclesLoading } from 'src/components/Loading'
import {
  FullScreenContainer,
  initializeDiscordParticles,
  Particles,
} from 'src/components/Particles'
import { falling, rising, slow } from 'src/components/Particles/discord'
import { useWalletModal } from 'src/components/WalletModal'
import { discord, white } from 'src/styles/colors'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import styled, { css } from 'styled-components'
import { Container } from 'tsparticles'

const STATUS_TYPES = [
  'connecting',
  'confirmation',
  'verifying',
  'succeeded',
  'failed',
]
type Status = typeof STATUS_TYPES[number]

export const Discord = () => {
  const { open } = useWalletModal()
  const [particlesContainer, setParticlesContainer] = useState<Container>()
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
    initializeDiscordParticles().then((contanier) =>
      setParticlesContainer(contanier),
    )
  }, [])
  useEffect(() => {
    if (!particlesContainer) return
    setBgScale(1)
    switch (status) {
      case 'connecting':
      case 'confirmation':
        setBgScale(0)
        return
      case 'verifying':
        slow(particlesContainer)
        return
      case 'succeeded':
        rising(particlesContainer)
        return
      case 'failed':
        falling(particlesContainer)
        return
    }
  }, [status])
  return (
    <>
      <Main>
        <FullScreenContainer scale={bgScale}>
          <Particles type="discord" />
        </FullScreenContainer>
        <Content>
          {status === 'connecting' && <DiscordLogo />}
          {status === 'confirmation' && (
            <>
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
            </>
          )}
          {status === 'verifying' && (
            <>
              <h2>Verifying now...</h2>
              <p>It may take a few minutes to verify.</p>
              <CiclesLoading />
            </>
          )}
          {status === 'succeeded' && <h2>Verification success!</h2>}
          {status === 'failed' && (
            <>
              <h2>Verification failed.</h2>
              <p>
                Your verification has failed. Do you want to verify again with
                another wallet?
              </p>
            </>
          )}
          <button
            onClick={() => {
              const nextIndex =
                (STATUS_TYPES.findIndex((each) => each === status) + 1) %
                STATUS_TYPES.length
              setStatus(STATUS_TYPES[nextIndex])
            }}
            style={{ fontSize: 32, marginTop: 32 }}
          >
            Go Next State
          </button>
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
