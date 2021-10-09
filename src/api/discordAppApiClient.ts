import Axios from 'axios'
import { DISCORD_APP_API_ENDPOINT } from 'src/utils/env'
import { DefaultApi } from 'src/__generated__/api/discord'

const axiosClient = Axios.create()
axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (!error.response) throw error
    return error.response
  },
)

export const discordAppApiClient = new DefaultApi(
  undefined,
  DISCORD_APP_API_ENDPOINT,
  axiosClient,
)
