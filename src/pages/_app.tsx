import type { AppProps } from 'next/app'
import { VFC } from 'react'
import 'src/styles/globals.css'
import 'src/styles/reset.css'
import { GlobalStyles } from '../styles/global-styles'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
export default MyApp
