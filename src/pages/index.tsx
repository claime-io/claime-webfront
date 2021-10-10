import type { NextPage } from 'next'
import { SEO } from 'src/components/SEO'
import { UnderDevelopment } from 'src/compositions/UnderDevelopment'

const TopPage: NextPage = () => (
  <>
    <SEO />
    <UnderDevelopment />
  </>
)
export default TopPage
