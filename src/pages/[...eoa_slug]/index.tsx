import dayjs from 'dayjs'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'
import { verifierApiClient } from 'src/api/verifierApiClient'
import { SEO } from 'src/components/SEO'
import {
  PAGE_TYPES,
  VerificationResult,
  VerificationResultProps,
} from 'src/compositions/Verfication'
import { isSupported, SupportedPropertyType } from 'src/models'
import { Page } from 'src/types'
import { eoaSummary } from 'src/utils/routes'

type VerificationContext = {
  eoa_slug: string[]
}

type VerificationResultStaticProps = Omit<VerificationResultProps, 'at'> & {
  at: string
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<any, VerificationContext> = async ({
  params,
}) => {
  const [eoa] = params?.eoa_slug || []
  if (!eoa) {
    return JSON.parse(
      JSON.stringify({
        props: {
          eoa: '',
          resuts: [],
          at: dayjs().toString(),
        },
      }),
    )
  }
  const res = await verifierApiClient.eoaGet(eoa)
  const props: VerificationResultStaticProps = {
    eoa: eoa,
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
    at: dayjs().toString(),
  }
  return JSON.parse(
    JSON.stringify({
      props: props,
      revalidate: 86400,
    }),
  )
}

const EOAVerificationResultPage: Page<
  VerificationResultStaticProps,
  VerificationContext
> = ({ eoa, results, at, ...props }) => {
  const [_, type] = props.query.eoa_slug
  useEffect(() => {
    if (type && !PAGE_TYPES.includes(type as any))
      Router.replace(eoaSummary(eoa), undefined, { shallow: true })
  }, [type])
  return (
    <>
      <SEO noindex />
      <VerificationResult
        eoa={eoa}
        results={results}
        at={dayjs(at)}
        type={type as VerificationResultProps['type']}
      />
    </>
  )
}
export default EOAVerificationResultPage
