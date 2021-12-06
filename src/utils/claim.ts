import {
  DomainIcon,
  FailedIcon,
  TwitterIcon,
  UnknownIcon,
  VerifiedIcon,
  WebsiteIcon,
} from 'src/assets/svgs'
import { SupportedPropertyType, VerificationResultType } from 'src/models'
import { failed, unknown, verified } from 'src/styles/colors'
import { Colors } from 'src/styles/types'
import { eoaSummary, fullURL } from './routes'

export const CLAIM_KEY = 'claime-ownership-claim'

export const toEvidence = (eoa: string) => `${CLAIM_KEY}=${eoa}`
export const toEvidenceWithURL = (eoa: string) =>
  `${toEvidence(eoa)}\n\nSee results in Claime:\n${fullURL(eoaSummary(eoa))}`

export const colorByResult = (result: VerificationResultType): Colors =>
  result === 'Verified' ? verified : result === 'Failed' ? failed : unknown

export const IconByStatus = (result: VerificationResultType) => {
  switch (result) {
    case 'Verified':
      return VerifiedIcon
    case 'Failed':
      return FailedIcon
    default:
      return UnknownIcon
  }
}

export const IconByType = (type: SupportedPropertyType) => {
  switch (type) {
    case 'Twitter Account':
      return TwitterIcon
    case 'Website':
      return WebsiteIcon
    case 'Domain':
      return DomainIcon
    default:
      return () => undefined
  }
}

export const urlByProperty = (type: SupportedPropertyType, id: string) => {
  switch (type) {
    case 'Twitter Account':
      return `https://twitter.com/${id}`
    case 'Website':
      return id
    case 'Domain':
      return `https://${id}`
    default:
      return ''
  }
}

export const evidenceUrlByProperty = (
  type: SupportedPropertyType,
  id: string,
  evidence: string,
) => {
  switch (type) {
    case 'Twitter Account':
      return `https://twitter.com/${id}/status/${evidence}`
    case 'Website':
      return id
    case 'Domain':
      return `https://www.nslookup.io/dns-records/${id}`
    default:
      return ''
  }
}

export const idByProperty = (type: SupportedPropertyType, id: string) => {
  switch (type) {
    case 'Twitter Account':
      return `@${id}`
    default:
      return id
  }
}

export const summaryByResult = (
  result: VerificationResultType,
  id: string,
  actual?: {
    id: string
    evidences?: string[]
  },
) =>
  result === 'Verified'
    ? 'Claim matched:'
    : id !== actual?.id
    ? 'Property ID not matched'
    : actual?.evidences?.find((each) => each.includes(CLAIM_KEY))
    ? 'Claim not matched:'
    : 'Claim not found.'
