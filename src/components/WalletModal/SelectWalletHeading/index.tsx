import { VFC } from 'react'
import { DiscordLogo } from 'src/assets/svgs'
import { Heading, SubHeading } from '../../Modal/styles'
import { WalletModalTheme } from '../types'

export const SelectWalletHeading: VFC<{ theme?: WalletModalTheme }> = ({
  theme,
}) => {
  switch (theme) {
    case 'discord':
      return <Discord />
    default:
      return <DefaultHeading />
  }
}

const DefaultHeading = () => (
  <>
    <Heading>Connect Wallet</Heading>
    <SubHeading>Connect to the wallet to use this App</SubHeading>
  </>
)

const Discord = () => (
  <>
    <Heading>
      <DiscordLogo />
    </Heading>
    <SubHeading>
      Connect to the wallet to verify the ownership of the NFT that will be your
      ticket to the channel
    </SubHeading>
  </>
)
