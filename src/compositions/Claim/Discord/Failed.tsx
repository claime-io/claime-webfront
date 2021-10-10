import { VFC } from 'react'
import { ButtonsDiv, DiscordCta, Heading, Text } from './styles'

type FailedProps = {
  changeAccount: VoidFunction
}

export const Failed: VFC<FailedProps> = ({ changeAccount }) => (
  <>
    <Heading>Failed to verify...</Heading>
    <Text>
      If you have mischoiced the address, you can change it to another and try
      it again.
    </Text>
    <ButtonsDiv>
      <DiscordCta onClick={changeAccount}>Try Again</DiscordCta>
    </ButtonsDiv>
  </>
)
