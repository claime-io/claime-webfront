import { ReactNode, VFC } from 'react'
import { Background } from 'src/components/Background'
import { Header } from 'src/components/Header'
import { fontWeightBold, fontWeightRegular } from 'src/styles/font'
import { breakpoint } from 'src/styles/mixins'
import styled from 'styled-components'
import { Footer } from './Top/styles'

export const AppLayout: VFC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Background />
    <Header />
    {children}
    <Footer>©︎2021 Claime</Footer>
  </>
)

export const Main = styled.main`
  position: relative;
  margin: 0 3vw;
  padding-bottom: 40px;
  h1 {
    margin-top: 64px;
    font-size: 32px;
    font-weight: ${fontWeightBold};
    text-align: center;
  }
  h2 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: ${fontWeightRegular};
    text-align: center;
  }
  @media ${breakpoint.m} {
    h1 {
      font-size: 40px;
    }
  }
  @media ${breakpoint.l} {
    max-width: 1080px;
    margin: 0 auto;
    padding-bottom: 120px;
    h1 {
      margin-top: 100px;
      font-size: 56px;
    }
    h2 {
      margin-top: 80px;
      font-size: 20px;
    }
  }
`
