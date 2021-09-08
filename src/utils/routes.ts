import { HOSTNAME } from './env'

export const TOP = '/'

export const SERVICE_URL = `https://${HOSTNAME}`

export const extractPathname = (path: string = '') => path.split(/[?#]/)[0]
