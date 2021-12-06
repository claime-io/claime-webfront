import { verify } from 'src/api/verifierApiClient'
import { VerificationResult } from 'src/models'
import useSWRImmutable from 'swr/immutable'

export const useVerificationResult = (
  eoa: string | null | undefined,
  network?: string,
) =>
  useSWRImmutable<VerificationResult[]>(
    ['verification_result', eoa, network],
    verificationResultFetcher,
  )

const verificationResultFetcher = (
  _: string,
  eoa: string | null | undefined,
  network?: string,
) => {
  if (!eoa) return []
  console.log(eoa)
  return verify(eoa, network)
}
