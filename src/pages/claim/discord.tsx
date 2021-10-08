import { DiscordVerificationParams } from 'src/api/discord'
import { SEO } from 'src/components/SEO'
import { Discord } from 'src/compositions/Claim/Discord'
import { Page } from 'src/types'

const DiscordClaimPage: Page<{}, DiscordVerificationParams> = ({ query }) => {
  return (
    <>
      <SEO noindex />
      <Discord
        params={{
          ...query,
          timestamp: +query.timestamp,
          validity: +query.validity,
        }}
      />
    </>
  )
}
export default DiscordClaimPage
