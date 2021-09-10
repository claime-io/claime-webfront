import { VFC } from 'react'
import { Header } from 'src/components/Header'
import { ContentGuide } from 'src/styles/global-styles'
import { Banner } from './Banner'
import { HeroHeader } from './HeroHeader'
import { FirstSection, SecondSection, ThirdSection } from './SectionContents'
import { Footer } from './styles'

export const Top: VFC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroHeader />
        <ContentGuide>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </ContentGuide>
        <Banner />
      </main>
      <Footer>©︎2021 CLAME</Footer>
    </>
  )
}
