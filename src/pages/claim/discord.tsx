import { DiscordVerificationParams } from 'src/api/discord'
import { SEO } from 'src/components/SEO'
import { Discord } from 'src/compositions/Claim/Discord'
import { Page } from 'src/types'

const DiscordClaimPage: Page<{}, DiscordVerificationParams> = ({ query }) => {
  return (
    <>
      <SEO pageTitle="NFT ownership verification for Discord" noindex />
      <Discord params={query as DiscordVerificationParams} />
    </>
  )
}
export default DiscordClaimPage
