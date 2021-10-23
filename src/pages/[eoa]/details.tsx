import dayjs from 'dayjs'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { verifierApiClient } from 'src/api/verifierApiClient'
import { SEO } from 'src/components/SEO'
import {
  VerificationSummary,
  VerificationSummaryProps,
} from 'src/compositions/Verfication/Summary'
import { isSupported, SupportedPropertyType } from 'src/models'

type VerificationContext = {
  eoa: string
}

type VerificationSummaryStaticProps = Omit<VerificationSummaryProps, 'at'> & {
  at: string
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<any, VerificationContext> = async ({
  params,
}) => {
  if (!params?.eoa) {
    return JSON.parse(
      JSON.stringify({
        props: {
          resuts: [],
          at: dayjs().toString(),
        },
      }),
    )
  }
  const res = await verifierApiClient.eoaGet(params.eoa)
  const props: VerificationSummaryStaticProps = {
    results:
      res.data
        ?.filter((each) => isSupported(each.propertyType, each.method))
        .map((each) => ({
          type: each.propertyType as SupportedPropertyType,
          id: each.propertyId,
          status: each.verified ? 'Verified' : 'Failed',
        })) || [],
    at: dayjs().toString(),
  }
  console.log(props)
  return JSON.parse(
    JSON.stringify({
      props: props,
      revalidate: 86400,
    }),
  )
}

const EOAVerificationSummaryPage: NextPage<VerificationSummaryStaticProps> = ({
  at,
  results,
}) => (
  <>
    <SEO noindex />
    <VerificationSummary results={results} at={dayjs(at)} />
  </>
)
export default EOAVerificationSummaryPage
