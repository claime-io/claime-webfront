import Axios from 'axios'
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
