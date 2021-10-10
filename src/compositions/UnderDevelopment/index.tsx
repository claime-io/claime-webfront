import { GITHUB_URL } from 'src/utils/routes'
import { HeroHeader } from '../Top/HeroHeader'

export const UnderDevelopment = () => (
  <main>
    <HeroHeader
      heading={'Make\nyour ownership verifiable'}
      description={
        'We are under development...\n\nHave you interested in Claime? Our repositories are below.'
      }
      cta={{
        label: 'Github',
        url: GITHUB_URL,
      }}
      full
    />
  </main>
)
