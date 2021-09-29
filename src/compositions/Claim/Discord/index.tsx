import { DiscordLogo } from 'src/assets/svgs'
import { discord } from 'src/styles/colors'
import { flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

export const Discord = () => {
  return (
    <Main>
      <DiscordLogo />
    </Main>
  )
}

const Main = styled.main`
  background: ${discord};
  ${flexCenter};
`
