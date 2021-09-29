import { VFC } from 'react'
import { HeaderSpacer } from 'src/components/Header'
import { ContentGuide } from 'src/styles/global-styles'
import { Banner } from './Banner'
import { HeroHeader } from './HeroHeader'
import { FirstSection, SecondSection, ThirdSection } from './SectionContents'

export const Top: VFC = () => {
  return (
    <main>
      <HeaderSpacer />
      <HeroHeader />
      <ContentGuide>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </ContentGuide>
      <Banner />
    </main>
  )
}
