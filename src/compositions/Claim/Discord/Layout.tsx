import { useEffect, useState, VFC } from 'react'
import { DiscordFooter } from 'src/components/Footer'
import { Header } from 'src/components/Header/Discord'
import { CiclesLoading } from 'src/components/Loading'
import {
  FullScreenContainer,
  initializeDiscordParticles,
  Particles,
} from 'src/components/Particles'
import { falling, rising, slow } from 'src/components/Particles/discord'
import { useWalletModal } from 'src/components/WalletModal'
import { discord, white } from 'src/styles/colors'
import { breakpoint, flexCenter } from 'src/styles/mixins'
import styled, { css } from 'styled-components'
import { Container } from 'tsparticles'
import { Confirmation } from './Confirmation'
import { Failed } from './Failed'
import { ButtonsDiv, Heading, InformationDiv, Text } from './styles'
import { Status } from './types'

type LayoutProps = {
  userId: string
  account: string | null | undefined
  sign: () => Promise<{ status: number }>
  link: () => Promise<{ status: number }>
}
export const Layout: VFC<LayoutProps> = ({ ...confirmationProps }) => {
  const { open } = useWalletModal()
  const [particlesContainer, setParticlesContainer] = useState<Container>()
  const [status, setStatus] = useState<Status>('connecting')
  const [bgScale, setBgScale] = useState(0)

  const handleSubmit =
    (submit: () => Promise<{ status: number }>) => async () => {
      setStatus('verifying')
      const res = await submit().catch(() => ({ status: -1 }))
      if (res.status === 403) {
        setStatus('expired')
        return
      }
      if (res.status !== 200) {
        setStatus('failed')
        return
      }
      setStatus('succeeded')
      return
    }

  const openWalletModal = () => {
    setStatus('connecting')
    open(
      {
        theme: 'discord',
        onClose: () => setStatus('confirmation'),
      },
      { styles: discordModalStyle, inescapable: true },
    )
  }

  useEffect(() => {
    openWalletModal()
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
      <Header />
      <Main>
        <FullScreenContainer scale={bgScale}>
          <Particles type="discord" />
        </FullScreenContainer>
        <Content>
          {status === 'confirmation' && (
            <Confirmation
              {...confirmationProps}
              sign={handleSubmit(confirmationProps.sign)}
              link={handleSubmit(confirmationProps.link)}
            />
          )}
          {status === 'verifying' && (
            <>
              <Heading>Verifying now...</Heading>
              <Text>It may take a few minutes to verify.</Text>
              <CiclesLoading />
            </>
          )}
          {status === 'succeeded' && (
            <>
              <Heading>Succesfully verified!</Heading>
              <Text>You can close this tab or window.</Text>
            </>
          )}
          {status === 'failed' && <Failed changeAccount={openWalletModal} />}
          {status === 'expired' && (
            <>
              <Heading>Session Expired.</Heading>
              <Text>Please try again from the URL we just sent you.</Text>
            </>
          )}
        </Content>
      </Main>
      <DiscordFooter>©︎2021 CLAIME</DiscordFooter>
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
