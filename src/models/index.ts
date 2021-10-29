export const SUPPORTED_PROPERTY_TYPES = [
  'Discord User ID',
  'Twitter Account',
  'Website',
  'Domain',
] as const

export type SupportedPropertyType = typeof SUPPORTED_PROPERTY_TYPES[number]

export type VerificationResultType = 'Verified' | 'Failed' | 'Unknown'

export const SUPPORTED_METHODS = {
  'Twitter Account': ['Tweet'],
  Domain: ['TXT'],
  Website: ['Meta Tag'],
  'Discord User ID': [],
} as const

export type SupportedMethod<T extends SupportedPropertyType> =
  typeof SUPPORTED_METHODS[T][number]

export type Claim = {
  propertyType: SupportedPropertyType
  propertyId: string
  evidence: string
  method?: string
}

export const discordUserIDClaim = (userId: string): Claim => ({
  propertyType: 'Discord User ID',
  propertyId: userId,
  evidence: '',
  method: 'Claime Discord App',
})

export const isSupportedPropetyType = (
  arg: any,
): arg is SupportedPropertyType => SUPPORTED_PROPERTY_TYPES.includes(arg)

export const isSupported = (type: string, method: string) => {
  if (!isSupportedPropetyType(type)) return false
  const methods = SUPPORTED_METHODS[type]
  if (!methods) return false
  return (methods as readonly string[]).includes(method)
}
