import { DISCORD_APP_API_ENDPOINT } from 'src/utils/env'
import { Configuration, DefaultApiFactory } from 'src/__generated__/api/discord'

export const discordAppApiClient = DefaultApiFactory(
  new Configuration({
    basePath: DISCORD_APP_API_ENDPOINT,
  }),
)
