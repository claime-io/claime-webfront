import { VFC } from 'react'
import { ButtonsDiv, DiscordCta, Heading, Text } from './styles'

type FailedProps = {
  changeAccount: VoidFunction
}

export const Failed: VFC<FailedProps> = ({ changeAccount }) => (
  <>
    <Heading>Verification failed.</Heading>
    <Text>
      Failed to verify your NFT ownership. If you have mischoiced address, you
      can change to another address and try again.
    </Text>
    <ButtonsDiv>
      <DiscordCta onClick={changeAccount}>Try Again</DiscordCta>
    </ButtonsDiv>
  </>
)
