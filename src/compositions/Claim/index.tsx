import { VFC } from 'react'
import { AppLayout } from 'src/compositions/Layout'
import { Domain, Twitter, Website } from './ClaimingForm'
import { PageType } from './common'
import { ClaimTop } from './Top'
export * from './common'

export const Claim: VFC<{ type?: PageType }> = ({ type }) => {
  return <AppLayout>{ComponentByType(type)({})}</AppLayout>
}

const ComponentByType = (type?: PageType): VFC => {
  switch (type) {
    case 'twitter':
      return Twitter
    case 'domain':
      return Domain
    case 'website':
      return Website
    default:
      return ClaimTop
  }
}
