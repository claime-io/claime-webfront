import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { VFC } from 'react'
import { Favicons } from 'src/components/Favicons'
import { getLibrary } from 'src/external/wallets'
import { ModalPortal } from 'src/hooks/useModal'
import 'src/styles/fonts.css'
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
        <Component query={router.query} {...pageProps} />
        <ModalPortal />
      </Web3ReactProvider>
    </>
  )
}
export default MyApp
