import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import evaluate from './api/evaluate'

const Home: NextPage = () => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Python Playground</title>
        <meta name="application-name" content="Python Playground, run and share Python code snippet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"
        strategy="beforeInteractive"
      ></Script>

      <main>
        <div className={styles.nav}>
          <img src="/favicon.ico" style={{width: "30px", "margin-right": "10px"}}/>
          <h3 className={styles.navleft}>
            The Python Playground
          </h3>

          <button className={styles.button} onClick={evaluate}>Run</button>
          <button className={styles.button}>Share</button>
        </div>

        <textarea id="code" style={{width: "100%", resize: "none"}} rows="25">
        </textarea>

        <textarea id="output" style={{width: "100%", resize: "none"}} rows="15" disabled>
        </textarea>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
