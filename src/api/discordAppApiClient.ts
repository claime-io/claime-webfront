import Axios from 'axios'
import { DISCORD_APP_API_ENDPOINT } from 'src/utils/env'
import { Configuration, DefaultApiFactory } from 'src/__generated__/api/discord'

const axiosClient = Axios.create()
axiosClient.interceptors.response.use((error) => {
  console.log('err', error)
  return Promise.resolve(error)
})

export const discordAppApiClient = DefaultApiFactory(
  new Configuration({ basePath: DISCORD_APP_API_ENDPOINT }),
  undefined,
  axiosClient,
)
