import type { AppProps } from 'next/app'
import Head from 'next/head'
import { VFC } from 'react'
import { Favicons } from 'src/components/Favicons'
import { GlobalStyles } from 'src/styles/global-styles'
import 'src/styles/globals.css'
import 'src/styles/reset.css'
import { extractPathname, SERVICE_URL } from 'src/utils/routes'

const MyApp: VFC<AppProps> = ({ Component, pageProps, router: { asPath } }) => {
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
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
