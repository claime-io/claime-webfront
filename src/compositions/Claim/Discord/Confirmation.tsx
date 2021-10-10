import { VFC } from 'react'
import { BuiltInChainId } from 'src/constants/chains'
import { useWallet } from 'src/hooks/useWallet'
import { white } from 'src/styles/colors'
import { fontWeightBold } from 'src/styles/font'
import { shortenAddress } from 'src/utils/address'
import { isProd } from 'src/utils/env'
import styled from 'styled-components'
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
}) => {
  const { chainId } = useWallet()
  const shouldChangeChain = isProd && chainId !== BuiltInChainId.MAINNET
  return (
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
        <LinkCta onClick={link} disabled={shouldChangeChain}>
          Link
          <Warning>Switch to mainnet to link.</Warning>
        </LinkCta>
      </ButtonsDiv>
    </>
  )
}
const Warning = styled(Text)`
  display: none;
  position: absolute;
  top: 120%;
  left: 0;
  right: 0;
  white-space: nowrap;
  margin-top: 24px;
  color: ${white};
  font-weight: ${fontWeightBold};
  text-align: center;
`

const LinkCta = styled(DiscordCta)`
  :disabled:hover {
    ${Warning} {
      display: unset;
    }
  }
`
