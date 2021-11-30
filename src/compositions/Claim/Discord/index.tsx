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
  const { account, chainId, sign } = useWallet()
  const { register } = useContract()

  const doSign = async () => {
    const [signature, message] = await sign(discordUserIDClaim(params.userId))
    return discordAppApiClient.postDiscordVerify({
      discord: params,
      eoa: { signature, message },
    })
  }

  const link = async () => {
    const tx = await register(discordUserIDClaim(params.userId))
    return discordAppApiClient.postDiscordVerify({
      discord: params,
      eoa: await toRawTxWithSignature(tx, chainId),
    })
  }

  return (
    <Layout
      userId={params.userId}
      account={account}
      sign={doSign}
      link={link}
    />
  )
}
