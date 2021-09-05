import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Claime.io</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sorry, we are under constructing...</h1>

        <p className={styles.description}>
          Have you interested in Claime? Our repositories are below.
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Claime Registry &rarr;</h2>
            <p>Store your claims of ownership via smart contract.</p>
          </a>

          <a
            href="https://github.com/bridges-inc/claime-verifier"
            className={styles.card}
          >
            <h2>Claime Verifier &rarr;</h2>
            <p>Verify ownership according to claims.</p>
          </a>

          <a
            href="https://github.com/bridges-inc/claime-webfront"
            className={styles.card}
          >
            <h2>Claime WebFront &rarr;</h2>
            <p>Claime client for web.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://bridges.inc" target="_blank" rel="noopener noreferrer">
          Powered by Bridges, Inc.
        </a>
      </footer>
    </div>
  )
}

export default Home
