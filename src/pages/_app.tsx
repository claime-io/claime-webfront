import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { VFC } from 'react'
import { Favicons } from 'src/components/Favicons'
import { Header } from 'src/components/Header'
import { Footer } from 'src/compositions/Top/styles'
import { getLibrary } from 'src/external/wallets'
import { ModalPortal } from 'src/hooks/useModal'
import { GlobalStyles } from 'src/styles/global-styles'
import 'src/styles/globals.css'
import 'src/styles/reset.css'
import { extractPathname, SERVICE_URL } from 'src/utils/routes'

const MyApp: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const { asPath } = router
  const pageUrl = `${SERVICE_URL}${extractPathname(asPath)}`
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={pageUrl} />
        <link rel="canonical" href={pageUrl} />
      </Head>
      <Favicons />
      <GlobalStyles />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header />
        <Component query={router.query} {...pageProps} />
        <Footer>©︎2021 CLAME</Footer>
        <ModalPortal />
      </Web3ReactProvider>
    </>
  )
}
export default MyApp
