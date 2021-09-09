import { VFC } from 'react'
import { Header } from 'src/components/Header'
import { HeroHeader } from './HeroHeader'

export const Top: VFC = () => {
  return (
    <>
      <Header />
      <HeroHeader />
    </>
  )
}
