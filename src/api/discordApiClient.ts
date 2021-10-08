import { DISCORD_API_ENDPOINT } from 'src/utils/env'
import { Configuration, DefaultApiFactory } from 'src/__generated__/api/discord'

export const discordApiClient = DefaultApiFactory(
  new Configuration({
    basePath: DISCORD_API_ENDPOINT,
  }),
)
