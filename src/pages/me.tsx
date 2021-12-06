import type { NextPage } from 'next'
import { SEO } from 'src/components/SEO'
import { MyVerificationResults } from 'src/compositions/Verfication'

const MyVerificationResultsPage: NextPage = () => (
  <>
    <SEO pageTitle="My Verification results" noindex />
    <MyVerificationResults />
  </>
)
export default MyVerificationResultsPage
