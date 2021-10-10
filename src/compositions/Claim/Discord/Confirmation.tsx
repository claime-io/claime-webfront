import { VFC } from 'react'
import { shortenAddress } from 'src/utils/address'
import { ButtonsDiv, DiscordCta, Heading, InformationDiv, Text } from './styles'

export type ConfirmationProps = {
  userId: string
  account: string | null | undefined
  sign: () => Promise<any>
  link: () => Promise<any>
}

export const Confirmation: VFC<ConfirmationProps> = ({
  userId,
  account,
  sign,
  link,
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
        <Text>{account ? shortenAddress(account) : '-'}</Text>
      </div>
    </InformationDiv>
    <Text>
      {`To prove ownership of the NFT, please sign it with the address where you own the NFT.\n\nYou can link the Discord ID with EOA on the Claime smart contract, and the verification will be completed automatically next time.\n(The function of the auto-verification is currently under development...)`}
    </Text>
    <ButtonsDiv>
      <DiscordCta onClick={sign}>Sign</DiscordCta>
      <DiscordCta onClick={link}>Link</DiscordCta>
    </ButtonsDiv>
  </>
)
