import {
  DomainIcon,
  FailedIcon,
  TwitterIcon,
  UnknownIcon,
  VerifiedIcon,
  WebsiteIcon,
} from 'src/assets/svgs'
import { SupportedPropertyType, VerificationStatus } from 'src/models'
import { failed, unknown, verified } from 'src/styles/colors'

export const colorByStatus = (status: VerificationStatus) =>
  status === 'Verified' ? verified : status === 'Failed' ? failed : unknown

export const IconByStatus = (status: VerificationStatus) => {
  switch (status) {
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
      return `https://www.nslookup.io/dns-records/${id}`
    default:
      return ''
  }
}