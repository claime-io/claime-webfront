export type SupportedPropertyType = 'Discord User ID'

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
