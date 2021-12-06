import { SupportedPropertyType } from 'src/models'

export const PAGE_TYPES = ['twitter', 'website', 'domain', 'discord'] as const
export type PageType = typeof PAGE_TYPES[number]

export const PAGE_TYPE_DICT: { [key in SupportedPropertyType]: PageType } = {
  'Twitter Account': 'twitter',
  Domain: 'domain',
  Website: 'website',
  'Discord User ID': 'discord',
}
