import { VFC } from 'react'
import { HeaderSpacer } from 'src/components/Header'
import { ContentGuide } from 'src/styles/global-styles'
import { SUPPORT_URL } from 'src/utils/routes'
import { Banner } from './Banner'
import { HeroHeader } from './HeroHeader'
import { FirstSection, SecondSection, ThirdSection } from './SectionContents'

export const Top: VFC = () => {
  return (
    <main>
      <HeaderSpacer />
      <HeroHeader
        heading={'Make\nyour ownership verifiable'}
        description="An open source product that ties blockchain wallet ownership to Web2.0, such as websites and social accounts."
        cta={{
          label: 'Support development',
          url: SUPPORT_URL,
        }}
      />
      <ContentGuide>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </ContentGuide>
      <Banner />
    </main>
  )
}
