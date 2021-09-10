import { HOSTNAME } from './env'

export const TOP = '/'

export const SERVICE_URL = `https://${HOSTNAME}`
export const GITHUB_URL = `https://github.com/orgs/bridges-inc/repositories?q=claime`
export const SUPPORT_URL =
  'https://gitcoin.co/grants/3485/make-your-ownership-verifiable'

export const extractPathname = (path: string = '') => path.split(/[?#]/)[0]
