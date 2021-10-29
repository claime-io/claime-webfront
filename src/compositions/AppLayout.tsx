import { ReactNode, VFC } from 'react'
import { Background } from 'src/components/Background'
import { Header } from 'src/components/Header'
import { Footer } from './Top/styles'

export const AppLayout: VFC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Background />
    <Header />
    {children}
    <Footer>©︎2021 Claime</Footer>
  </>
)
