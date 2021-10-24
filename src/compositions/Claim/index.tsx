import { VFC } from 'react'
import { AppLayout } from 'src/compositions/AppLayout'
import { Domain, Twitter } from './ClaimingForm'
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
    default:
      return ClaimTop
  }
}
