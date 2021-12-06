import Axios from 'axios'
import {
  isSupported,
  SupportedPropertyType,
  VerificationResult,
  VerificationResultType,
} from 'src/models'
import { VERIFIER_API_ENDPOINT } from 'src/utils/env'
import { DefaultApi } from 'src/__generated__/api/verifier'

const axiosClient = Axios.create()
axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (!error.response) throw error
    return error.response
  },
)

export const verifierApiClient = new DefaultApi(
  undefined,
  VERIFIER_API_ENDPOINT,
  axiosClient,
)

export const verify = async (
  eoa: string,
  network?: string,
): Promise<VerificationResult[]> => {
  const res = await verifierApiClient.verify(eoa, network)
  return (
    res.data
      ?.filter(({ claim: { propertyType, method } }) =>
        isSupported(propertyType, method),
      )
      .map(({ claim, result, actual, at, error }) => ({
        type: claim.propertyType as SupportedPropertyType,
        id: claim.propertyId,
        method: claim.method,
        evidence: claim.evidence,
        network: claim.network,
        result: result as VerificationResultType,
        actual: actual
          ? {
              id: actual.propertyId,
              evidences: actual.evidences,
            }
          : undefined,
        at: at,
        error,
      })) || []
  )
}
