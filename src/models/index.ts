export const CLAIMABLE_PROPERTY_TYPES = [
  'Twitter Account',
  'Website',
  'Domain',
] as const
export const SUPPORTED_PROPERTY_TYPES = [
  ...CLAIMABLE_PROPERTY_TYPES,
  'Discord User ID',
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
  method: string
  evidence: string
}

export type VerificationResult = {
  type: SupportedPropertyType
  id: string
  method: string
  evidence: string
  result: VerificationResultType
  network: string
  actual?: {
    id: string
    evidences?: string[]
  }
  at: string
  error?: string
}
export const resultKey = (result: VerificationResult) =>
  `${result.type}_${result.id}_${result.method}_${result.network}`

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

export const distinctByProperty = (results: VerificationResult[]) =>
  results.reduce<VerificationResult[]>((prev, current) => {
    for (let i = 0; i < prev.length; i++) {
      const each = prev[i]
      if (each.type === current.type && each.id === current.id) {
        if (each.result !== 'Verified' && current.result !== 'Unknown')
          prev.splice(i, 1, current)
        return prev
      }
    }
    return prev.concat(current)
  }, [])
