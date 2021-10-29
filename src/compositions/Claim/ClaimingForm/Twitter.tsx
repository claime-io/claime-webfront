import { CtaLink } from 'src/components/Cta'
import { toEvidence } from 'src/utils/claim'
import { ClaimingForm } from './Form'

export const Twitter = () => (
  <ClaimingForm
    propertyType="Twitter Account"
    method="Tweet"
    placeholder="Enter your tweet URL"
    EvidenceFC={({ eoa }) => (
      <CtaLink href={urlToTweetEvidence(eoa)}>Tweet Evidence</CtaLink>
    )}
    toClaimInput={toClaimInput}
  />
)

const TWEET_URL_REGEXP = /^https:\/\/twitter.com\/([^\/]+)\/status\/([^\/?#]+)/

const toClaimInput = (url: string) => {
  const [_, propertyId, evidence] = TWEET_URL_REGEXP.exec(url) || []
  if (!propertyId || !evidence)
    return { claim: undefined, errorMessage: 'Invalid Tweet URL.' }
  return { claim: { propertyId, evidence } }
}

const urlToTweetEvidence = (eoa: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(toEvidence(eoa))}`
