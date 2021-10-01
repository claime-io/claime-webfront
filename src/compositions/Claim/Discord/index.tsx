import { useEffect } from 'react'
import { DiscordLogo } from 'src/assets/svgs'
import { DiscordParticles, FullScreenContainer } from 'src/components/Particles'
import { useWalletModal } from 'src/components/WalletModal'
import { discord, white } from 'src/styles/colors'
import { flexCenter } from 'src/styles/mixins'
import styled, { css } from 'styled-components'

export const Discord = () => {
  const { open } = useWalletModal()
  useEffect(() => {
    open({ theme: 'discord' }, { styles: discordModalStyle, inescapable: true })
  }, [])
  return (
    <Main>
      <FullScreenContainer>
        <DiscordParticles />
      </FullScreenContainer>
      <DiscordLogo />
    </Main>
  )
}

const Main = styled.main`
  background: ${discord};
  ${flexCenter};
`

const discordModalStyle = css`
  background: ${discord};
  color: ${white};
`
