import Router from 'next/router'
import { useEffect } from 'react'
import { SEO } from 'src/components/SEO'
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
  return (
    <>
      <SEO pageTitle="Claim of ownership" noindex />
      <Claim type={type as PageType} />
    </>
  )
}
export default ClaimPage
