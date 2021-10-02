import { useEffect, useState } from 'react'
import { CtaButton } from 'src/components/Button'
import { CiclesLoading } from 'src/components/Loading'
import {
  FullScreenContainer,
  initializeDiscordParticles,
  Particles,
} from 'src/components/Particles'
import { falling, rising, slow } from 'src/components/Particles/discord'
import { useWalletModal } from 'src/components/WalletModal'
import { useWallet } from 'src/hooks/useWallet'
import { discord, white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightRegular,
} from 'src/styles/font'
import { flexCenter } from 'src/styles/mixins'
import { shortenAddress } from 'src/utils/address'
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
  const { account } = useWallet()
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
          {status === 'confirmation' && (
            <>
              <h2>Verify your NFT ownership</h2>
              <InformationDiv>
                <div>
                  <p>Your Discord ID</p>
                  <p>XXXXX</p>
                </div>
                <div>
                  <p>Your EOA</p>
                  <p>{account ? shortenAddress(account) : '-'}</p>
                </div>
              </InformationDiv>
              <p>
                {`You can store the binding of your discord ID and EOA to the Claime Smart Contract so that you will be verify automatically when you need to verify your NFT ownership.\n\nOr you can verify with only your signature as one time verification.`}
              </p>
              <ButtonsDiv>
                <DiscordCta>Sign only</DiscordCta>
                <DiscordCta>Store</DiscordCta>
              </ButtonsDiv>
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
              <ButtonsDiv>
                <DiscordCta
                  onClick={() => {
                    setStatus('connecting')
                    open(
                      {
                        theme: 'discord',
                        onClose: () => setStatus('confirmation'),
                      },
                      { styles: discordModalStyle, inescapable: true },
                    )
                  }}
                >
                  Try Again
                </DiscordCta>
              </ButtonsDiv>
            </>
          )}
          {/* TODO remove */}
          <button
            onClick={() => {
              const nextIndex =
                (STATUS_TYPES.findIndex((each) => each === status) + 1) %
                STATUS_TYPES.length
              if (nextIndex === 0) {
                setBgScale(0)
                setStatus('connecting')
                open(
                  {
                    theme: 'discord',
                    onClose: () => setStatus('confirmation'),
                  },
                  { styles: discordModalStyle, inescapable: true },
                )
                return
              }
              setStatus(STATUS_TYPES[nextIndex])
            }}
            style={{
              position: 'fixed',
              right: '10%',
              bottom: '20%',
              fontSize: 32,
              marginTop: 64,
            }}
          >
            {(STATUS_TYPES.findIndex((each) => each === status) + 1) %
              STATUS_TYPES.length ===
            0
              ? 'Back To First'
              : 'Go Next State'}{' '}
            (Dev Only)
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
const InformationDiv = styled.div`
  width: 80%;
  > div {
    margin-top: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 24px;
      font-weight: ${fontWeightMedium};
    }
  }
`
const DiscordCta = styled(CtaButton)`
  height: 64px;
  width: 240px;
  border-radius: 32px;
  background: ${white};
  border: 1px solid ${discord};
  color: ${discord};
  font-size: 24px;
  font-weight: ${fontWeightBold};
  :hover,
  :focus {
    background: ${discord};
    border: 1px solid ${white};
    color: ${white};
  }
`
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    margin: 0 20px;
  }
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
  }
  h2 + * {
    margin-top: 64px;
  }
  p {
    font-size: 18px;
    font-weight: ${fontWeightRegular};
    max-width: 640px;
    white-space: pre-wrap;
    line-height: 1.4;
  }
  ${CiclesLoading} {
    margin-top: 64px;
  }
  ${InformationDiv} {
    margin-bottom: 32px;
  }
  ${ButtonsDiv} {
    margin-top: 64px;
  }
`

const Main = styled.main`
  position: relative;
  background: ${discord};
  ${flexCenter};
`
