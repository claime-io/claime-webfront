import { HOSTNAME } from './env'

export const TOP = '/'

export const SERVICE_URL = `https://${HOSTNAME}`
export const GITHUB_URL = `https://github.com/orgs/bridges-inc/repositories?q=claime`

export const extractPathname = (path: string = '') => path.split(/[?#]/)[0]
