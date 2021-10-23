import { VFC } from 'react'
import { DiscordLogo } from 'src/assets/svgs'
import { DISCLAIMER } from 'src/utils/routes'
import { Heading, InlineLink, SubHeading } from '../../Modal/styles'
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
    <SubHeading>
      All blockchain wallet connections should be made at your own risk. To read
      the disclaimer,{' '}
      <InlineLink href={DISCLAIMER} newTab>
        click here
      </InlineLink>
      .
    </SubHeading>
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
