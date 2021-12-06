import { PageType } from 'src/compositions/Claim'
import { HOSTNAME } from './env'

export const TOP = '/'
export const eoaSummary = (eoa: string) => `/${eoa}`
export const eoaDetails = (eoa: string) => `/${eoa}/details`
export const CLAIM = `/claim`
export const ME = '/me'

export const claimProperty = (type: PageType) => `${CLAIM}/${type}`

export const SERVICE_URL = `https://${HOSTNAME}`
export const GITHUB_URL = `https://github.com/orgs/bridges-inc/repositories?q=claime`
export const DISCLAIMER_URL =
  'https://github.com/bridges-inc/claime-verifier/blob/main/DISCLAIMER.md'
export const SUPPORT_URL =
  'https://gitcoin.co/grants/3485/make-your-ownership-verifiable'

export const METAMASK_URL = 'https://metamask.io/'

export const extractPathname = (path: string = '') => path.split(/[?#]/)[0]
