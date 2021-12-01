import dayjs from 'dayjs'
import { ethers } from 'ethers'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'
import { verify } from 'src/api/verifierApiClient'
import { SEO } from 'src/components/SEO'
import {
  PAGE_TYPES,
  VerificationResult,
  VerificationResultProps,
} from 'src/compositions/Verfication'
import { RESULT_TTL_SEC } from 'src/constants/misc'
import { Page } from 'src/types'
import { isProd } from 'src/utils/env'
import { eoaSummary } from 'src/utils/routes'

type VerificationContext = {
  eoa_slug: string[]
  network: string
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
  if (!eoa || !ethers.utils.isAddress(eoa)) {
    return {
      notFound: true,
    }
  }
  const res = await verify(eoa, params?.network)
  const props: VerificationResultStaticProps = {
    eoa: eoa,
    results: res,
    at: dayjs().toString(),
  }
  return JSON.parse(
    JSON.stringify({
      props: props,
      revalidate: isProd ? RESULT_TTL_SEC : 1,
    }),
  )
}

const EOAVerificationResultPage: Page<
  VerificationResultStaticProps,
  VerificationContext
> = ({ eoa, results, at, ...props }) => {
  const [_, type] = props.query.eoa_slug || []
  useEffect(() => {
    if (type && !PAGE_TYPES.includes(type as any))
      Router.replace(eoaSummary(eoa), undefined, { shallow: true })
  }, [type])
  return (
    <>
      <SEO pageTitle={`Verification results of ${eoa}`} noindex />
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
