import { VFC } from 'react'
import { ButtonsDiv, DiscordCta, Heading, Text } from './styles'

type FailedProps = {
  changeAccount: VoidFunction
}

export const Failed: VFC<FailedProps> = ({ changeAccount }) => (
  <>
    <Heading>Verification failed.</Heading>
    <Text>
      Your verification has failed. Do you want to verify again with another
      wallet?
    </Text>
    <ButtonsDiv>
      <DiscordCta onClick={changeAccount}>Try Again</DiscordCta>
    </ButtonsDiv>
  </>
)
