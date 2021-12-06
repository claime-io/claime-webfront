import type { NextPage } from 'next'
import { SEO } from 'src/components/SEO'
import { Top } from 'src/compositions/Top'

const TopPage: NextPage = () => (
  <>
    <SEO />
    <Top />
  </>
)
export default TopPage
