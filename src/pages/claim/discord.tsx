import type { NextPage } from 'next'
import { SEO } from 'src/components/SEO'
import { Discord } from 'src/compositions/Claim/Discord'

const DiscordClaimPage: NextPage = () => (
  <>
    <SEO noindex />
    <Discord />
  </>
)
export default DiscordClaimPage
