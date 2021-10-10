import { VFC } from 'react'
import { DiscordVerificationParams } from 'src/api/discord'
import { discordAppApiClient } from 'src/api/discordAppApiClient'
import { useContract } from 'src/hooks/useContract'
import { useWallet } from 'src/hooks/useWallet'
import { discordUserIDClaim } from 'src/models'
import { toRawTxWithSignature } from 'src/utils/transaction'
import { Layout } from './Layout'

type DiscordProps = {
  params: DiscordVerificationParams
}

export const Discord: VFC<DiscordProps> = ({ params }) => {
  const { account, chainId } = useWallet()
  const contract = useContract()

  const sign = async () => {
    const [signature, message] = await contract.sign(
      discordUserIDClaim(params.userId),
    )
    return discordAppApiClient.postDiscordVerify({
      discord: params,
      eoa: { signature, message },
    })
  }

  const link = async () => {
    const tx = await contract.register(discordUserIDClaim(params.userId))
    return discordAppApiClient.postDiscordVerify({
      discord: params,
      eoa: await toRawTxWithSignature(tx, chainId),
    })
  }

  return (
    <Layout userId={params.userId} account={account} sign={sign} link={link} />
  )
}
