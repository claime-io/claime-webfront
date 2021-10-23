import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { verifierApiClient } from 'src/api/verifierApiClient'
import { SEO } from 'src/components/SEO'
import {
  VerificationDetails,
  VerificationDetailsProps,
} from 'src/compositions/Verfication/Details'
import { isSupported, SupportedPropertyType } from 'src/models'

type VerificationContext = {
  eoa: string
}

type VerificationDetailsStaticProps = VerificationDetailsProps

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
          eoa: '',
          resuts: [],
        },
      }),
    )
  }
  const res = await verifierApiClient.eoaGet(params.eoa)
  const props: VerificationDetailsStaticProps = {
    eoa: params.eoa,
    results:
      res.data
        ?.filter((each) => isSupported(each.propertyType, each.method))
        .map((each) => ({
          type: each.propertyType as SupportedPropertyType,
          id: each.propertyId,
          status: each.verified ? 'Verified' : 'Failed',
          actual: each.actual,
          at: each.at,
          method: each.method,
          evidence: each.evidence,
        })) || [],
  }
  return JSON.parse(
    JSON.stringify({
      props: props,
      revalidate: 86400,
    }),
  )
}

const EOAVerificationDetailsPage: NextPage<VerificationDetailsStaticProps> = ({
  eoa,
  results,
}) => (
  <>
    <SEO noindex />
    <VerificationDetails eoa={eoa} results={results} />
  </>
)
export default EOAVerificationDetailsPage
