import Router from 'next/router'
import { useEffect } from 'react'
import { Claim, PageType, PAGE_TYPES } from 'src/compositions/Claim'
import { Page } from 'src/types'
import { CLAIM } from 'src/utils/routes'

type ClaimContext = {
  type: string[]
}
const ClaimPage: Page<{}, ClaimContext> = ({ query }) => {
  const [type] = query?.type || []
  useEffect(() => {
    if (type && !PAGE_TYPES.includes(type as any))
      Router.replace(CLAIM, undefined, { shallow: true })
  }, [type])
  return <Claim type={type as PageType} />
}
export default ClaimPage
