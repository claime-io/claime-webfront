import { useEffect, useState, VFC } from 'react'
import { DiscordVerificationParams } from 'src/api/discord'
import { discordAppApiClient } from 'src/api/discordAppApiClient'
import { CtaButton } from 'src/components/Button'
import { CiclesLoading } from 'src/components/Loading'
import {
  FullScreenContainer,
  initializeDiscordParticles,
  Particles,
} from 'src/components/Particles'
import { falling, rising, slow } from 'src/components/Particles/discord'
import { useWalletModal } from 'src/components/WalletModal'
import { useContract } from 'src/hooks/useContract'
import { useWallet } from 'src/hooks/useWallet'
import { discordUserIDClaim } from 'src/models'
import { discord, white } from 'src/styles/colors'
import {
  fontWeightBold,
  fontWeightMedium,
  fontWeightRegular,
  fontWeightSemiBold,
} from 'src/styles/font'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import { shortenAddress } from 'src/utils/address'
import { toRawTxWithSignature } from 'src/utils/transaction'
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

type DiscordProps = {
  params: DiscordVerificationParams
}

export const Discord: VFC<DiscordProps> = ({ params }) => {
  const { open } = useWalletModal()
  const { account, chainId } = useWallet()
  const [particlesContainer, setParticlesContainer] = useState<Container>()
  const [status, setStatus] = useState<Status>('connecting')
  const [bgScale, setBgScale] = useState(0)
  const { register, sign } = useContract()

  const doSign = async () => {
    const [signature, message] = await sign(discordUserIDClaim(params.userId))
    const res = await discordAppApiClient.postDiscordVerify({
      discord: params,
      eoa: { signature, message },
    })
    console.log(res)
  }
  const store = async () => {
    const tx = await register(discordUserIDClaim(params.userId))
    const res = await discordAppApiClient.postDiscordVerify({
      discord: params,
      eoa: await toRawTxWithSignature(tx, chainId),
    })
    console.log(res)
  }
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
              <Heading>Verify your NFT ownership</Heading>
              <InformationDiv>
                <div>
                  <Text>Your Discord ID</Text>
                  <Text>{params.userId}</Text>
                </div>
                <div>
                  <Text>Your EOA</Text>
                  <Text>{account ? shortenAddress(account) : '-'}</Text>
                </div>
              </InformationDiv>
              <Text>
                {`You can store the binding of your discord ID and EOA to the Claime Smart Contract so that you will be verified automatically when you need to verify your NFT ownership again or in another server.\n\nOr you can verify with only your signature as one time verification.`}
              </Text>
              <ButtonsDiv>
                <DiscordCta onClick={doSign}>Sign only</DiscordCta>
                <DiscordCta onClick={store}>Sign and Store</DiscordCta>
              </ButtonsDiv>
            </>
          )}
          {status === 'verifying' && (
            <>
              <Heading>Verifying now...</Heading>
              <Text>It may take a few minutes to verify.</Text>
              <CiclesLoading />
            </>
          )}
          {status === 'succeeded' && <Heading>Verification success!</Heading>}
          {status === 'failed' && (
            <>
              <Heading>Verification failed.</Heading>
              <Text>
                Your verification has failed. Do you want to verify again with
                another wallet?
              </Text>
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
    flex-direction: column;
    p {
      font-size: 18px;
      font-weight: ${fontWeightMedium};
    }
  }
  @media ${breakpoint.m} {
    > div {
      flex-direction: row;
      p {
        font-size: 24px;
      }
    }
  }
`
const DiscordCta = styled(CtaButton)`
  height: 40px;
  width: 240px;
  border-radius: 24px;
  background: ${white};
  border: 1px solid ${discord};
  color: ${discord};
  font-size: 18px;
  font-weight: ${fontWeightBold};
  :hover,
  :focus {
    background: ${discord};
    border: 1px solid ${white};
    color: ${white};
  }
  @media ${breakpoint.m} {
    height: 64px;
    border-radius: 32px;
    font-size: 24px;
  }
`
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  > button {
    margin: 20px;
  }
  @media ${breakpoint.m} {
    flex-direction: row;
  }
`

const Heading = styled.h1`
  font-size: 24px;
  font-weight: ${fontWeightSemiBold};
  letter-spacing: -0.04em;

  @media ${breakpoint.m} {
    font-size: 64px;
    font-weight: ${fontWeightBold};
  }
`
const Text = styled.p`
  font-size: 18px;
  font-weight: ${fontWeightRegular};
  max-width: 640px;
  white-space: pre-wrap;
  line-height: 1.4;
`
const Content = styled.div`
  position: relative;
  ${flexCenter};
  flex-direction: column;
  color: ${white};
  text-align: center;
  padding: 128px 20px 64px;
  ${Heading} + * {
    margin-top: 24px;
  }
  ${CiclesLoading} {
    margin-top: 64px;
  }
  ${InformationDiv} {
    margin-bottom: 32px;
  }
  ${ButtonsDiv} {
    margin-top: 24px;
  }
  @media ${breakpoint.m} {
    padding: unset;
    ${Heading} + * {
      margin-top: 64px;
    }
    ${ButtonsDiv} {
      margin-top: 64px;
    }
  }
`

const Main = styled.main`
  position: relative;
  background: ${discord};
  ${flexCenter};
`
