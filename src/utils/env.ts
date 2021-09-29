export const isProd = Boolean(process.env.NEXT_PUBLIC_IS_PROD)

export const HOSTNAME = isProd
  ? 'claime.io'
  : process.env.NEXT_PUBLIC_VERCEL_URL || 'dev.claime.io'
