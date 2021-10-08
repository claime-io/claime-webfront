import { VFC } from 'react'
import { ButtonsDiv, DiscordCta, Heading, InformationDiv, Text } from './styles'

export type ConfirmationProps = {
  userId: string
  account: string | null | undefined
  sign: () => Promise<any>
  store: () => Promise<any>
}

export const Confirmation: VFC<ConfirmationProps> = ({
  userId,
  account,
  sign,
  store,
}) => (
  <>
    <Heading>Verify your NFT ownership</Heading>
    <InformationDiv>
      <div>
        <Text>Your Discord ID</Text>
        <Text>{userId}</Text>
      </div>
      <div>
        <Text>Your EOA</Text>
        <Text>{account || '-'}</Text>
      </div>
    </InformationDiv>
    <Text>
      {`You can store the binding of your discord ID and EOA to the Claime Smart Contract so that you will be verified automatically when you need to verify your NFT ownership again or in another server.\n\nOr you can verify with only your signature as one time verification.`}
    </Text>
    <ButtonsDiv>
      <DiscordCta onClick={sign}>Sign only</DiscordCta>
      <DiscordCta onClick={store}>Sign and Store</DiscordCta>
    </ButtonsDiv>
  </>
)
